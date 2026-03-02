const ipStore = new Map();   // ip -> { count, windowStart }
const emailStore = new Map(); // email -> { count, windowStart }

const IP_MAX = 5;
const IP_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const EMAIL_MAX = 10;
const EMAIL_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkWindow(map, key, max, windowMs) {
  const now = Date.now();
  const entry = map.get(key);

  if (!entry || now - entry.windowStart > windowMs) {
    return { allowed: true };
  }

  if (entry.count >= max) {
    const retryAfter = Math.ceil((entry.windowStart + windowMs - now) / 1000);
    return { allowed: false, retryAfter };
  }

  return { allowed: true };
}

function checkRateLimit(ip, email) {
  const ipCheck = checkWindow(ipStore, ip, IP_MAX, IP_WINDOW_MS);
  if (!ipCheck.allowed) return ipCheck;

  const emailCheck = checkWindow(emailStore, email.toLowerCase(), EMAIL_MAX, EMAIL_WINDOW_MS);
  if (!emailCheck.allowed) return emailCheck;

  return { allowed: true };
}

function recordRequest(ip, email) {
  const now = Date.now();

  const ipEntry = ipStore.get(ip);
  if (!ipEntry || now - ipEntry.windowStart > IP_WINDOW_MS) {
    ipStore.set(ip, { count: 1, windowStart: now });
  } else {
    ipEntry.count += 1;
  }

  const key = email.toLowerCase();
  const emailEntry = emailStore.get(key);
  if (!emailEntry || now - emailEntry.windowStart > EMAIL_WINDOW_MS) {
    emailStore.set(key, { count: 1, windowStart: now });
  } else {
    emailEntry.count += 1;
  }
}

// Cleanup every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of ipStore) {
    if (now - v.windowStart > IP_WINDOW_MS) ipStore.delete(k);
  }
  for (const [k, v] of emailStore) {
    if (now - v.windowStart > EMAIL_WINDOW_MS) emailStore.delete(k);
  }
}, 5 * 60 * 1000);

module.exports = { checkRateLimit, recordRequest };
