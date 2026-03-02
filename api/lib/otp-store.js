const crypto = require('crypto');

const store = new Map();
const OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes
const RESEND_COOLDOWN_MS = 60 * 1000; // 60 seconds
const MAX_ATTEMPTS = 3;
const SALT = process.env.OTP_SALT || 'totalcloudai-otp-default-salt-2026';

function hash(value) {
  return crypto.createHash('sha256').update(value + SALT).digest('hex');
}

function createOTP(email, formData) {
  const key = email.toLowerCase();
  const existing = store.get(key);

  if (existing && Date.now() - existing.createdAt < RESEND_COOLDOWN_MS) {
    return { otp: null, error: 'Please wait 60 seconds before requesting another code.' };
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  store.set(key, {
    hashedOtp: hash(otp),
    expiresAt: Date.now() + OTP_EXPIRY_MS,
    attempts: 0,
    formData,
    createdAt: Date.now(),
  });

  return { otp, error: null };
}

function verifyOTP(email, code) {
  const key = email.toLowerCase();
  const entry = store.get(key);

  if (!entry) {
    return { valid: false, message: 'No verification code found. Please request a new one.', expired: true };
  }

  if (Date.now() > entry.expiresAt) {
    store.delete(key);
    return { valid: false, message: 'Code expired. Please request a new one.', expired: true };
  }

  entry.attempts += 1;

  if (entry.attempts > MAX_ATTEMPTS) {
    store.delete(key);
    return { valid: false, message: 'Too many attempts. Please request a new code.', attemptsRemaining: 0 };
  }

  if (hash(code) !== entry.hashedOtp) {
    const remaining = MAX_ATTEMPTS - entry.attempts;
    return { valid: false, message: `Invalid code. ${remaining} attempt${remaining !== 1 ? 's' : ''} remaining.`, attemptsRemaining: remaining };
  }

  const { formData } = entry;
  store.delete(key);
  return { valid: true, formData };
}

// Cleanup expired entries every 60 seconds
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (now > entry.expiresAt + 60000) store.delete(key);
  }
}, 60000);

module.exports = { createOTP, verifyOTP };
