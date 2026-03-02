const { verifyOTP } = require('./lib/otp-store');
const { sendContactEmail } = require('./lib/resend-client');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { email, otp } = req.body;

    // Validate
    if (!email || !otp || !/^\d{6}$/.test(otp)) {
      return res.status(400).json({ message: 'Please enter a valid 6-digit code.' });
    }

    // Verify OTP
    const result = verifyOTP(email, otp);
    if (!result.valid) {
      const status = result.expired ? 410 : 400;
      return res.status(status).json({
        success: false,
        message: result.message,
        attemptsRemaining: result.attemptsRemaining,
      });
    }

    // Send contact email to info@totalcloudai.com
    await sendContactEmail(result.formData);

    return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (err) {
    console.error('verify-otp error:', err);
    return res.status(500).json({ message: 'Verification succeeded but message delivery failed. Please contact us directly at Info@totalcloudai.com.' });
  }
};
