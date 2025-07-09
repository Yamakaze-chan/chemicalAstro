import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function main() {
  try {
    const data = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: "utemp0308@gmail.com",
      subject: "Test từ script",
      text: "Gửi test thành công!",
    });

    console.log("✅ Gửi thành công:", data);
  } catch (err) {
    console.error("❌ Gửi thất bại:", err);
  }
}

main();
