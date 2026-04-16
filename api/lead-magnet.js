const { Resend } = require('resend');
const { checkRateLimit, recordRequest } = require('./lib/rate-limiter');
const { saveLead } = require('./lib/lead-store');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@totalcloudai.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@totalcloudai.com';

module.exports = async function handler(req, res) {
  try {
    const { fullName, email, company, source } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    const rateCheck = checkRateLimit(ip, email);
    if (!rateCheck.allowed) {
      return res.status(429).json({ message: `Too many requests. Please try again in ${rateCheck.retryAfter} seconds.` });
    }

    saveLead({ type: 'lead-magnet', fullName, email, company: company || '', source: source || 'agentic-ai-checklist' });
    recordRequest(ip, email);

    const firstName = fullName.split(' ')[0];
    const pdfUrl = 'https://totalcloudai.com/brochures/agentic-ai-readiness-checklist';

    // Send PDF link to the lead
    await resend.emails.send({
      from: `TotalCloudAI <${FROM_EMAIL}>`,
      to: [email],
      subject: 'Your Agentic AI Readiness Checklist — TotalCloudAI',
      html: `
<div style="max-width:520px;margin:0 auto;font-family:-apple-system,Arial,sans-serif;background:#0A1228;color:#EEF2FF;border-radius:16px;padding:40px;text-align:center;">
  <img src="https://totalcloudai.com/assets/favicon-source.png" alt="TotalCloudAI" width="48" style="margin-bottom:16px;border-radius:10px;">
  <h2 style="margin:0 0 8px;font-size:22px;">Your Checklist Is Ready</h2>
  <p style="color:#7090E0;font-size:14px;margin-bottom:28px;">
    Hi ${firstName}, thank you for downloading our Agentic AI Readiness Checklist. Here's your link:
  </p>
  <a href="${pdfUrl}" style="display:inline-block;background:#3B82F6;color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:15px;margin-bottom:24px;">
    Open Checklist &rarr;
  </a>
  <p style="color:#4868B0;font-size:13px;margin-top:20px;">
    <strong>Tip:</strong> Use the "Save as PDF" button on the page to save a local copy.
  </p>
  <hr style="border:none;border-top:1px solid rgba(59,130,246,0.15);margin:28px 0 20px;">
  <p style="color:#4868B0;font-size:12px;">
    Want to discuss your readiness score?<br>
    <a href="https://totalcloudai.com/contact" style="color:#60a5fa;">Book a free consultation</a> with our cloud architects.
  </p>
  <p style="color:#3a4a70;font-size:11px;margin-top:16px;">TotalCloudAI Ltd &middot; totalcloudai.com</p>
</div>`,
    });

    // Notify admin about new lead
    await resend.emails.send({
      from: `TotalCloudAI Leads <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      subject: `New Lead: ${fullName} downloaded Agentic AI Checklist`,
      html: `
<div style="font-family:sans-serif;max-width:500px;padding:24px;">
  <h2 style="margin:0 0 16px;color:#0f172a;">New Lead Magnet Download</h2>
  <table style="font-size:14px;border-collapse:collapse;width:100%;">
    <tr><td style="padding:8px 0;font-weight:600;width:100px;">Name:</td><td style="padding:8px 0;">${fullName}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600;">Email:</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:8px 0;font-weight:600;">Company:</td><td style="padding:8px 0;">${company || 'N/A'}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600;">Source:</td><td style="padding:8px 0;">${source || 'agentic-ai-checklist'}</td></tr>
    <tr><td style="padding:8px 0;font-weight:600;">Time:</td><td style="padding:8px 0;">${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td></tr>
  </table>
</div>`,
    });

    return res.status(200).json({
      success: true,
      message: 'Checklist sent to your email!',
      downloadUrl: pdfUrl,
    });
  } catch (err) {
    console.error('lead-magnet error:', err);
    return res.status(500).json({ message: 'Something went wrong. Please try again.' });
  }
};
