require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());

// Clean URL routing BEFORE static (so /services resolves to services.html, not /services/ directory)
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.includes('.') || req.path.startsWith('/api/')) return next();
  // Try .html first (e.g. /services → services.html)
  const htmlFile = path.join(__dirname, req.path + '.html');
  if (fs.existsSync(htmlFile)) return res.sendFile(htmlFile);
  // Try index.html in subdirectory (e.g. /blog/cloud-transformation-ai → blog/cloud-transformation-ai/index.html)
  const indexFile = path.join(__dirname, req.path, 'index.html');
  if (fs.existsSync(indexFile)) return res.sendFile(indexFile);
  next();
});

app.use(express.static(path.join(__dirname), { extensions: ['html'] }));

// API routes
app.post('/api/send-otp', require('./api/send-otp'));
app.post('/api/verify-otp', require('./api/verify-otp'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`TotalCloudAI dev server running on http://localhost:${PORT}`);
  console.log(`reCAPTCHA: ${process.env.RECAPTCHA_SECRET_KEY ? 'configured' : 'NOT SET (will skip in dev)'}`);
  console.log(`Resend: ${process.env.RESEND_API_KEY ? 'configured' : 'NOT SET'}`);
});
