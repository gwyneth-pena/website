import nodemailer from "nodemailer";

export async function sendMail(data: any) {
  const smtpOptions = {
    host: process.env.NEXT_PUBLIC_SMTP_HOST || "smtp.mailtrap.io",
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "2525"),
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER || "user",
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD || "password",
    },
  };

  console.log(smtpOptions, "SMTP, OpTIONS");

  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return transporter.sendMail({
    from: process.env.NEXT_PUBLIC_SMTP_USER,
    to: process.env.NEXT_PUBLIC_SMTP_USER,
    subject: `Inquiry from ${data.name}`,
    html: `
        <p>Name: ${data.name} </p>
        <p>Email: ${data.email} </p>
        <p>Message: ${data.message} </p>
        `,
  });
}
