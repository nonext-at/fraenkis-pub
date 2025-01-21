import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
        }

        // Nodemailer setup
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMTP_USER, // Sender's email (your email)
            to: "info@fraenkis.at", // Your receiving email
            replyTo: email, // This allows you to reply directly to the sender
            subject: `Neue Kontaktanfrage: ${name}`, // Better subject line
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #555;">Neue Kontaktanfrage</h2>
                    <p><strong>Absender:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                    <p><strong>Nachricht:</strong></p>
                    <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #007BFF;">${message}</p>
                    <p style="margin-top: 20px;">Diese Nachricht wurde über das Kontaktformular gesendet.</p>
                </div>
            `, // Improved HTML content
        });

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to send email.", error }), { status: 500 });
    }
}
