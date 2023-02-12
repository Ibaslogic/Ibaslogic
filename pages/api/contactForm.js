import nodemailer from "nodemailer";

export default async (req, res) => {
  const { subject, name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: {
        name: name,
        address: process.env.SMTP_USER,
      },
      to: process.env.SMTP_USER,
      subject: `${subject}: ${name}`,
      replyTo: `${name} <${email}>`,
      text: message,
      html: `<div>${message}</div>`,
    });

    console.log("Message sent", info.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json({ status: "OK" });
};
