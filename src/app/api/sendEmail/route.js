// import Resend from "@resend/node";

// export async function POST(req) {
//   const body = await req.json();
//   const { name, email, phone, subject, message } = body;

//   // Initialize Resend instance
//   const resend = new Resend(process.env.RESEND_API_KEY); // Use your Resend API key

//   try {
//     // Send the email
//     const response = await resend.emails.send({
//       from: process.env.EMAIL_FROM, // Sender email address configured in Resend
//       to: process.env.EMAIL_TO, // Recipient email address
//       subject: `New message from ${name}`,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Phone:</strong> ${phone}</p>
//              <p style="text-transform:capitalize;"><strong>Subject:</strong> ${subject}</p>
//              <p><strong>Message:</strong> ${message}</p>`,
//     });

//     return new Response("Email sent successfully!", {
//       status: 200,
//       statusText: JSON.stringify(response),
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response("Failed to send email", {
//       status: 500,
//       statusText: "Failed to send email",
//     });
//   }
// }
