import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  
    const message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    const info = await transporter.sendMail(message);
  
    console.log('Message sent: %s', info.messageId);
  };

  export { sendEmail };

<<<<<<< HEAD
// import nodemailer from 'nodemailer'

// const sendEmail = async (options) => {
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: process.env.SMTP_PORT,
//       auth: {
//         user: process.env.SMTP_EMAIL,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });
  
//     const message = {
//       from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
//       to: options.email,
//       subject: options.subject,
//       text: options.message,
//     };
  
//     const info = await transporter.sendMail(message);
  
//     console.log('Message sent: %s', info.messageId);
//   };

//   export { sendEmail };
=======

//2323
>>>>>>> a77c2c09bac92195b4085c1d5e5364fbf2061f6f
