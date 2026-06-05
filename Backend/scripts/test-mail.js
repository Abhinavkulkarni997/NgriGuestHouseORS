// const nodemailer = require("nodemailer");

// async function sendMail() {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtpout.secureserver.net",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "no-reply@ngri.in",
//         pass: "Rect@2026",
//       },
//     });

//     const info = await transporter.sendMail({
//       from: "no-reply@ngri.in",
//       to: "sampath.a@ngri.res.in",
//       subject: "Regarding guesthouse",
//       text: "Hello! This is a test email sent from  ngri guesthouse.",
//     });

//     console.log("Email sent successfully");
//     console.log("Accepted:", info.accepted);
//     console.log("Rejected:", info.rejected);
//     console.log("Response:", info.response);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// sendMail();

// const nodemailer = require("nodemailer");

// async function test() {
//   const transporter = nodemailer.createTransport({
//     host: "smtpout.secureserver.net",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "no-reply@ngri.in",
//       pass: "Rect@2026",
//     },
//     logger: true,
//     debug: true,
//   });

//   try {
//     await transporter.verify();
//     console.log("SMTP Connected Successfully");
//   } catch (err) {
//     console.error(err);
//   }
// }

// test();

// const nodemailer = require("nodemailer");

// async function test() {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtpout.secureserver.net",
//       port: 587,
//       secure: false,
//       auth: {
//         user: "no-reply@ngri.in",
//         pass: "Rect@2026",
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//       logger: true,
//       debug: true,
//     });

//     await transporter.verify();
//     console.log("SMTP Connected");
//   } catch (err) {
//     console.error(err);
//   }
// }

// test();


const nodemailer = require("nodemailer");

async function sendMail() {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@ngri.in",
        pass: "Rect@2026",
      },
      logger: true,
      debug: true,
    });

    const info = await transporter.sendMail({
      from: '"NGRI Guest House" <no-reply@ngri.in>',
      to: "abhinavkulkarni64@gmail.com",
      subject: "NGRI Guest House Test Mail",
      text: "Hello Sir,\n\nThis is a test email from the NGRI Guest House application.\n\nRegards,\nNGRI Guest House Team",
    });

    console.log("Email Sent Successfully");
    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Response:", info.response);
  } catch (error) {
    console.error("Mail Error:", error);
  }
}

sendMail();