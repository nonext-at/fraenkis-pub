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
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Sender's email
            to: process.env.RECEIVER_EMAIL, // Your receiving email
            subject: `New Contact Form Submission from ${name}`,
            text: message,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to send email.", error }), { status: 500 });
    }
}
