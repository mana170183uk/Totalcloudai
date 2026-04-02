require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google.com", "https://www.gstatic.com"],
      scriptSrcAttr: ["'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://www.google.com"],
      frameSrc: ["https://www.google.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

// Gzip compression
app.use(compression());

// CORS for API routes only
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'https://totalcloudai.com';
app.use('/api', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  next();
});

app.use(express.json());

// API routes (before static so they take priority)
app.post('/api/send-otp', require('./api/send-otp'));
app.post('/api/verify-otp', require('./api/verify-otp'));

// Clean URL routing — async fs for non-blocking I/O
const publicDir = path.join(__dirname, 'public');

app.use(async (req, res, next) => {
  if (req.method !== 'GET' || req.path.includes('.') || req.path.startsWith('/api/')) return next();
  try {
    // Try .html (e.g. /services → public/services.html)
    const htmlFile = path.join(publicDir, req.path + '.html');
    await fs.access(htmlFile);
    return res.sendFile(htmlFile);
  } catch {
    try {
      // Try index.html in subdirectory (e.g. /blog/article → public/blog/article/index.html)
      const indexFile = path.join(publicDir, req.path, 'index.html');
      await fs.access(indexFile);
      return res.sendFile(indexFile);
    } catch {
      next();
    }
  }
});

// Serve ONLY the public directory — never the project root
app.use(express.static(publicDir, {
  extensions: ['html'],
  maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
}));

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`TotalCloudAI server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`reCAPTCHA: ${process.env.RECAPTCHA_SECRET_KEY ? 'configured' : 'NOT SET'}`);
  console.log(`Resend: ${process.env.RESEND_API_KEY ? 'configured' : 'NOT SET'}`);
});
