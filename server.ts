import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { name, contact, company, projectType, budget, description } = req.body;

      // Check if SMTP credentials are provided
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return res.status(500).json({ 
          error: "서버에 이메일 발송 설정(SMTP)이 되어있지 않습니다. 관리자에게 문의하세요." 
        });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.naver.com",
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER, // Sender address (must match SMTP user for Naver/Gmail)
        to: "contact@example.com", // Receiver address
        subject: `[GREEN-IT 문의] ${name}님의 프로젝트 문의`,
        html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">새로운 프로젝트 문의가 접수되었습니다.</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px; font-weight: bold; color: #4b5563;">이름</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #4b5563;">연락처</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #111827;">${contact}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #4b5563;">회사/단체명</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #111827;">${company || '미입력'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #4b5563;">프로젝트 유형</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #111827;">${projectType.join(', ') || '미선택'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #4b5563;">예산 범위</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #111827;">${budget || '미선택'}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: bold; color: #4b5563; margin-bottom: 10px;">프로젝트 내용:</p>
              <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; color: #111827; line-height: 1.6;">
                ${description.replace(/\n/g, '<br/>')}
              </div>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } catch (error: any) {
      console.error("Email sending failed:", error);
      res.status(500).json({ error: `이메일 발송 중 오류가 발생했습니다: ${error.message}` });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
