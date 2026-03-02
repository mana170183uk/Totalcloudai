const { verifyRecaptcha } = require('./lib/recaptcha');
const { checkRateLimit, recordRequest } = require('./lib/rate-limiter');
const { createOTP } = require('./lib/otp-store');
const { sendOtpEmail } = require('./lib/resend-client');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { recaptchaToken, fullName, email, company, service, projectDetails } = req.body;

    // Validate required fields
    if (!fullName || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    // Rate limiting
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(ip, email);
    if (!rateCheck.allowed) {
      return res.status(429).json({ message: `Too many requests. Please try again in ${rateCheck.retryAfter} seconds.` });
    }

    // Verify reCAPTCHA
    if (recaptchaToken) {
      const captcha = await verifyRecaptcha(recaptchaToken);
      if (!captcha.valid) {
        return res.status(403).json({ message: 'Security verification failed. Please refresh and try again.' });
      }
    } else if (process.env.NODE_ENV === 'production') {
      return res.status(403).json({ message: 'Security verification required.' });
    }

    // Generate OTP
    const { otp, error } = createOTP(email, { fullName, email, company, service, projectDetails });
    if (error) {
      return res.status(429).json({ message: error });
    }

    // Send OTP email
    await sendOtpEmail(email, fullName, otp);
    recordRequest(ip, email);

    return res.status(200).json({ success: true, message: 'Verification code sent to your email.' });
  } catch (err) {
    console.error('send-otp error:', err);
    return res.status(500).json({ message: 'Failed to send verification email. Please try again.' });
  }
};
