const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;
const SCORE_THRESHOLD = 0.5;

async function verifyRecaptcha(token) {
  if (!RECAPTCHA_SECRET) {
    console.warn('RECAPTCHA_SECRET_KEY not set — skipping verification in dev mode');
    return { valid: true, score: 1.0 };
  }

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(token)}`,
    });

    const data = await res.json();

    if (!data.success || data.score < SCORE_THRESHOLD) {
      console.log('reCAPTCHA failed:', { success: data.success, score: data.score, action: data.action });
      return { valid: false, score: data.score || 0 };
    }

    return { valid: true, score: data.score };
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return { valid: false, score: 0 };
  }
}

module.exports = { verifyRecaptcha };
