import nodemailer from "nodemailer";

interface emailFunctionProps {
  email: string;
  html: string;
  subject: string;
  text: string;
}

const smtpServer = "smtp.gmail.com"; // hoặc smtp.titan.email nếu bạn dùng Titan
const smtpPort = 587;

async function sendEmail(props: emailFunctionProps) {
  const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: false,
    auth: {
      user: import.meta.env.EMAIL_USER, // từ .env
      pass: import.meta.env.EMAIL_PASS, // mật khẩu ứng dụng
    },
  });

  const info = await transporter.sendMail({
    from: import.meta.env.EMAIL_USER,
    to: props.email,
    subject: props.subject,
    text: props.text,
    html: props.html,
  });

  console.log("✅ Email sent:", info.messageId);
  return info;
}

export { sendEmail };
