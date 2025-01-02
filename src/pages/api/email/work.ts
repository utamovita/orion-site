import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { email, message, name, agreements, phone, position } = req.body;

  if (!name || !email || !message || !agreements || !phone || !position) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nowa aplikacja na stanowisko ${position} od ${name}`,
      text: message,
      html: `<p><strong>Imię i nazwisko:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Telefon:</strong> ${phone}</p>
             <p><strong>Na stanowisko:</strong> ${position}</p>
             <p><strong>Wiadomość:</strong></p>
             
             <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Przesłano CV. Odezwiemy się wkrótce!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
