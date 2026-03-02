FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --production

COPY . .

ARG RECAPTCHA_SECRET_KEY
ARG RESEND_API_KEY
ARG OTP_SALT

ENV RECAPTCHA_SECRET_KEY=$RECAPTCHA_SECRET_KEY \
    RESEND_API_KEY=$RESEND_API_KEY \
    OTP_SALT=$OTP_SALT \
    CONTACT_EMAIL=info@totalcloudai.com \
    FROM_EMAIL=noreply@totalcloudai.com \
    ALLOWED_ORIGIN=https://totalcloudai.com \
    NODE_ENV=production \
    PORT=8080

EXPOSE 8080

CMD ["node", "server.js"]
