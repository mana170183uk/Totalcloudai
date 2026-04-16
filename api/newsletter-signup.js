const { Resend } = require('resend');
const { checkRateLimit, recordRequest } = require('./lib/rate-limiter');
const { saveLead } = require('./lib/lead-store');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@totalcloudai.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@totalcloudai.com';

module.exports = async function handler(req, res) {
  try {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(ip, email);
    if (!rateCheck.allowed) {
      return res.status(429).json({ message: `Too many requests. Please try again in ${rateCheck.retryAfter} seconds.` });
    }

    saveLead({ type: 'newsletter', email });
    recordRequest(ip, email);

    await resend.emails.send({
      from: `TotalCloudAI <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: `New Newsletter Signup: ${email}`,
      html: `<div style="font-family:sans-serif;max-width:480px;padding:24px;"><h2 style="margin:0 0 12px;">New Newsletter Signup</h2><p><strong>Email:</strong> ${email}</p><p><strong>Time:</strong> ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p></div>`,
    });

    return res.status(200).json({ success: true, message: 'You\'re subscribed! We\'ll send you our latest cloud insights.' });
  } catch (err) {
    console.error('newsletter-signup error:', err);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
};
