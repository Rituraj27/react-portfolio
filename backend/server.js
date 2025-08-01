import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: ['https://riturajhao.in', 'https://www.riturajhao.in'],
    methods: ['POST'],
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
});
app.use('/send', limiter);

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is live');
});

app.post('/send', async (req, res) => {
  const { email, name, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: `Email: ${email} \n\nMessage: ${message}`,
    });

    res.status(200).json({ success: true, msg: 'Email sent!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
