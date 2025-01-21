import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, selectedDate, selectedTime, selectedTable } = body;

        console.log (name, email, phone, selectedDate, selectedTime, selectedTable);

        // Validate input
        if (!name || !email || !phone || !selectedDate || !selectedTime || !selectedTable) {
            return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
        }

        const formattedDate = formatDate(selectedDate);

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
            to: "kontakt@fraenkis.at", // Your receiving email
            replyTo: email, // This allows you to reply directly to the sender
            subject: `Neue Billiardtisch-Reservierung: ${name}`, // Better subject line
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #555;">Neue Reservierungsanfrage</h2>
                    <p><strong>Absender:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
                    <p><strong>Telefon:</strong> ${phone}</p>
                    <p><strong>Datum:</strong> ${formattedDate}</p>
                    <p><strong>Uhrzeit:</strong> ${selectedTime}</p>
                    <p><strong>Tisch Nummer:</strong> ${selectedTable}</p>
                    <p style="margin-top: 20px;">Diese Nachricht wurde über das Reservierungsformular gesendet.</p>
                </div>
            `, // Improved HTML content
        });

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to send email.", error }), { status: 500 });
    }
}

function formatDate(date) {
    const [year, month, day] = date.split("-");
    return `${day}.${month}.${year}`;
}