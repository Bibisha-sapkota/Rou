import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import pool from './db.js';

dotenv.config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

// ── Nodemailer transporter ──────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendNotificationEmail(subject, htmlBody) {
  try {
    await transporter.sendMail({
      from: `"ROU Global Website" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject,
      html: htmlBody,
    });
    console.log('✅ Notification email sent successfully');
  } catch (error) {
    console.error('❌ Email sending failed:', error.message);
  }
}

// ── Database initialization ─────────────────────────────────
async function initializeDatabase() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(100) DEFAULT NULL,
      company_name VARCHAR(255) DEFAULT NULL,
      service VARCHAR(255) DEFAULT NULL,
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

// ── Routes ──────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, service, message, companyName } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    await pool.execute(
      `INSERT INTO contact_messages (name, email, phone, company_name, service, message) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone || null, companyName || null, service || null, message]
    );

    // Database only (Email is handled by EmailJS in frontend)

    res.json({ success: true, message: 'Contact message saved successfully.' });
  } catch (error) {
    console.error('MySQL insert error:', error);
    res.status(500).json({ error: 'Unable to save contact message.' });
  }
});

// ── Start server ────────────────────────────────────────────
initializeDatabase()
  .then(() => {
    app.listen(port, '127.0.0.1', () => {
      console.log(`Backend API listening on http://127.0.0.1:${port}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
    process.exit(1);
  });
