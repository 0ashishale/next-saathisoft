// import nodemailer from "nodemailer";

// export async function POST(request) {
    
//   if (request.method !== "POST") {
//     return new Response({
//       status: 401,
//       body: JSON.stringify({ error: "Method Not Allowed" }),
//     });
//   }

//       if (
//         !process.env.NEXT_PUBLIC_EMAIL_PASSWORD ||
//         !process.env.NEXT_PUBLIC_EMAIL_USER
//       ) {
//         return new Response({
//           status: 401,
//           body: JSON.stringify({ error: "Env required" }),
//         });
//       }

//   console.log("body", request.body);

//     try {
//         let body = '';

//         for await (const chunk of request.body) {
//             body +=chunk
//         }
        
//       const { name, email, message } = JSON.parse(body);
      
//       if (!name || !email || !message) {
//         return new Response({
//           status: 401,
//           body: JSON.stringify({ error: "All fields are required" }),
//         });
//       }
//     console.log(name, email, message);
  

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL_USER,
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: "SAATHisoft",
//       to: "saathisoft02@gmail.com",
//       subject: `SAATHisoft Web Enquiry!`,
//         html: `
//       <h1>SAATHisoft <h1/>
//         <h1>${name}</h1>
//         <h3>Email</h1>
//         <h4>${email}</h2>
//         <br/>
//         <h3>Enquiry</h1>
//         <h3>${message}</h3>
//       `,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log(`Message sent : %s`, info.messageId);

//     return new Response({
//       status: 200,
//       body: JSON.stringify({ message: "Email sent successfully" }),
//     });
//   } catch (error) {
//     console.log(`Error sending email: `, error);
//     return new Response({
//       status: 500,
//       body: JSON.stringify({ error: "Error sending email" }),
//     });
//   }
// }




// import nodemailer from "nodemailer";

// export async function POST(request) {
//   if (request.method !== "POST") {
//     return new Response({
//       status: 401,
//       body: JSON.stringify({ error: "Method Not Allowed" }),
//     });
//   }

//   if (
//     !process.env.NEXT_PUBLIC_EMAIL_PASSWORD ||
//     !process.env.NEXT_PUBLIC_EMAIL_USER
//   ) {
//     return new Response({
//       status: 401,
//       body: JSON.stringify({ error: "Env required" }),
//     });
//   }

//   console.log("body", request.body);

//   try {
//     let body = "";

//     for await (const chunk of request.body) {
//       body += chunk;
//     }

//     const { name, email, message } = JSON.parse(body);

//     if (!name || !email || !message) {
//       return new Response({
//         status: 401,
//         body: JSON.stringify({ error: "All fields are required" }),
//       });
//     }

//     console.log(name, email, message);

//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL_USER,
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: "SAATHisoft",
//       to: "saathisoft02@gmail.com",
//       subject: `SAATHisoft Web Enquiry!`,
//       html: `
//       <h1>SAATHisoft <h1/>
//       <h1>${name}</h1>
//       <h3>Email</h1>
//       <h4>${email}</h2>
//       <br/>
//       <h3>Enquiry</h1>
//       <h3>${message}</h3>
//     `,
//     };

//     const info = await transporter.sendMail(mailOptions);

//     console.log(`Message sent: %s`, info.messageId);

//     return new Response({
//       status: 200,
//       body: JSON.stringify({ message: "Email sent successfully" }),
//     });
//   } catch (error) {
//     console.error(`Error sending email: `, error);

//     // Include error details in the response
//     return new Response({
//       status: 500,
//       body: JSON.stringify({
//         error: "Error sending email",
//         details: error.message,
//       }),
//     });
//   }
// }



import nodemailer from "nodemailer";

export async function POST(request) {
  if (request.method !== "POST") {
    throw new Error("Method Not Allowed");
  }

  if (
    !process.env.NEXT_PUBLIC_EMAIL_PASSWORD ||
    !process.env.NEXT_PUBLIC_EMAIL_USER
  ) {
    throw new Error("Environment variables are required");
  }

  // console.log("body", request.body);

  try {
    let body = "";

    for await (const chunk of request.body) {
      body += chunk;
    }

    const { name, email, message } = JSON.parse(body);

    if (!name || !email || !message) {
      throw new Error("All fields are required");
    }

    // console.log(name, email, message);

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

    // console.log(`Message sent: %s`, info.messageId);

    return new Response({
      status: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    });
  } catch (error) {
    console.error(`Error sending email: `, error);

    // Throw the error again to be caught by the outer error handler
    return new Response({
      status: 500,
      body: JSON.stringify(`Error sending mail:`, error )
    })
  }
}


