const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@totalcloudai.com';
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'info@totalcloudai.com';

async function sendOtpEmail(toEmail, fullName, otp) {
  const firstName = fullName.split(' ')[0];

  const { error } = await resend.emails.send({
    from: `TotalCloudAI <${FROM_EMAIL}>`,
    to: [toEmail],
    subject: 'Your TotalCloudAI Verification Code',
    html: `
<div style="max-width:480px;margin:0 auto;font-family:-apple-system,Arial,sans-serif;background:#0A1228;color:#EEF2FF;border-radius:16px;padding:40px;text-align:center;">
  <img src="https://totalcloudai.com/assets/favicon-source.png" alt="TotalCloudAI" width="48" style="margin-bottom:16px;border-radius:10px;">
  <h2 style="margin:0 0 8px;font-size:22px;">Your Verification Code</h2>
  <p style="color:#7090E0;font-size:14px;margin-bottom:24px;">
    Hi ${firstName}, use this code to verify your email and send your message.
  </p>
  <div style="background:#101C3A;border:2px solid rgba(59,130,246,0.3);border-radius:12px;padding:20px;letter-spacing:12px;font-size:32px;font-weight:700;color:#3B82F6;">
    ${otp}
  </div>
  <p style="color:#4868B0;font-size:12px;margin-top:20px;">
    This code expires in 5 minutes.<br>
    If you didn't request this, you can safely ignore this email.
  </p>
  <hr style="border:none;border-top:1px solid rgba(59,130,246,0.1);margin:24px 0;">
  <p style="color:#4868B0;font-size:11px;">TotalCloudAI Ltd &middot; totalcloudai.com</p>
</div>`,
  });

  if (error) throw new Error(error.message);
}

async function sendContactEmail(formData) {
  const { fullName, email, company, service, projectDetails } = formData;
  const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });

  const { error } = await resend.emails.send({
    from: `TotalCloudAI Contact <${FROM_EMAIL}>`,
    to: [CONTACT_EMAIL],
    replyTo: email,
    subject: `New Contact: ${service} — ${fullName}`,
    html: `
<div style="max-width:600px;margin:0 auto;font-family:-apple-system,Arial,sans-serif;color:#333;">
  <div style="background:#0A1228;color:#EEF2FF;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h2 style="margin:0;font-size:18px;">New Verified Contact Submission</h2>
  </div>
  <div style="padding:24px 32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:10px 0;font-weight:600;width:130px;vertical-align:top;">Name:</td><td style="padding:10px 0;">${fullName}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Email:</td><td style="padding:10px 0;"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Company:</td><td style="padding:10px 0;">${company || 'N/A'}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Service:</td><td style="padding:10px 0;">${service}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Details:</td><td style="padding:10px 0;white-space:pre-wrap;">${projectDetails || 'N/A'}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Submitted:</td><td style="padding:10px 0;">${timestamp}</td></tr>
      <tr><td style="padding:10px 0;font-weight:600;vertical-align:top;">Verified:</td><td style="padding:10px 0;color:#059669;font-weight:600;">Email OTP Verified</td></tr>
    </table>
  </div>
</div>`,
  });

  if (error) throw new Error(error.message);
}

module.exports = { sendOtpEmail, sendContactEmail };
