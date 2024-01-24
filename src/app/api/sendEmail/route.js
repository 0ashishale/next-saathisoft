import nodemailer from "nodemailer";

export async function POST(request) {
    
  if (request.method !== "POST") {
    return new Response({
      status: 401,
      message: `Method not allowed`,
    });
  }

//   const { name, email, message } = request.body;
  console.log("body", request.body);

//   if (!name || !email || !message) {
//     return new Response({
//       status: 401,
//       message: `All fields are required`,
//     });
//   }

    try {
        let body = '';

        for await (const chunk of request.body) {
            body +=chunk
        }
        
        const { name, email, message } = JSON.parse(body);
        console.log(name, email, message);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: "SAATHisoft",
      to: "saathisoft02@gmail.com",
      subject: `SAATHisoft Web Enquiry!`,
        html: `
      <h1>SAATHisoft <h1/>
        <h1>${name}</h1>
        <h3>Email</h1>
        <h4>${email}</h2>
        <br/>
        <h3>Enquiry</h1>
        <h3>${message}</h3>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`Message sent : %s`, info.messageId);

    return new Response({
      status: 200,
      message: `Email sent Successfully`,
    });
  } catch (error) {
    console.log(`Error sending email: `, error);
    return new Response({
      status: 500,
      message: "Error sending email : " + error.message,
    });
  }
}

// import nodemailer from 'nodemailer'

// export default async function POST(req) {

//     if (req.method !== "POST") {
//         return new Response({
//             status: 401,
//             mesage : `Method not allowed`
//         })
//     }
//     const { name, email, message } = req.body;
//     console.log(req.body);

//     if (!name || !email || !message) {
//         return new Response({
//             status : 401,
//             message : `All fields are required`
//         })
//     }

//     console.log(name, email, message, process.env.NEXT_PUBLIC_EMAIL_USER);

//     try {
//         //create a nodemailer transporter

//         // const transporter = nodemailer.createTransport({
//         //   service: "gmail",
//         //   port: 465,
//         //   secure: true,
//         //   auth: {
//         //     user: process.env.NEXT_PUBLIC_EMAIL_USER,
//         //     pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//         //   },
//         // });
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.NEXT_PUBLIC_EMAIL_USER,
//     pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//   },
// });

//         // try {
//         //     const test = await transporter.verify()
//         //     console.log(test);
//         // } catch (error) {
//         //     console.log(error);
//         //     return
//         // }
//          const mailOptions = {
//            from: "SAATHisoft",
//            to: "saathisoft02@gmail.com",
//            subject: `SAATHisoft Web Enquiry!`,
//            text: `Name : ${name} \nEmail : ${email} \nMessage : ${message}`,
//          };
//         //send mail with defined mailOprions object

//         const info = await transporter.sendMail(mailOptions);

//         console.log(`Message sent : %s`, info.messageId);

//         new Response({
//           status : 200,
//             message : `Email sent Successfully`
//         })

//     } catch (error) {
//         console.log(`Error sending email: `, error);
//         new Response({
//             status : 500,
//             message : 'Error sending email :', error
//         })
//     }
// }

// import { sendEmail } from "@/utils/sendEmail";
// export default async function handler(req, res) {
//   if (req.method !== POST) {
//     return res.status(405).json({
//       message: "Method Not Allowed.",
//     });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({
//       message: "Missing required fields.",
//     });
//   }

//   const emailSent = await sendEmail({ name, email, message });

//   if (emailSent) {
//     res.status(200).json({
//       message: `Email sent Successfully`,
//     });
//   } else {
//     res.status(500).json({ message: "Failed to send email" });
//   }
// }

// pages/api/sendEmail.js

//
