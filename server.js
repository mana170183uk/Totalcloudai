require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API routes
app.post('/api/send-otp', require('./api/send-otp'));
app.post('/api/verify-otp', require('./api/verify-otp'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`TotalCloudAI dev server running on http://localhost:${PORT}`);
  console.log(`reCAPTCHA: ${process.env.RECAPTCHA_SECRET_KEY ? 'configured' : 'NOT SET (will skip in dev)'}`);
  console.log(`Resend: ${process.env.RESEND_API_KEY ? 'configured' : 'NOT SET'}`);
});
