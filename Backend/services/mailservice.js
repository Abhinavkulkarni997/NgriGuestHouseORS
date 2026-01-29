const nodemailer=require('nodemailer');
const fs=require('fs');
const path=require('path');
// creation of transportation object 

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS length =", process.env.EMAIL_PASS?.length);
 const mailTransporter=nodemailer.createTransport({
     service:'gmail',
    // service:'smtp.office365.com',
    // secure:false,
    // port:587,
    port:465,
    secure:true,
    auth:{
        user:`ngriguesthouse@gmail.com`,
        pass:`qhvztonuibpdkzkq`,
        //  user: 'ngriguesthouse@hotmail.com',
        // pass:'a8121511670!V',
    },
    //   tls: {
    //     ciphers: 'SSLv3' 
    // },
});

mailTransporter.verify((err, success) => {
  if (err) {
    console.error("Mail transporter error:", err);
  } else {
    console.log("Mail transporter ready",success);
  }
});


const sendAcknowledgementEmail=async({toEmail,name,bookingId,bookingDate})=>{
    const mailOptions={
    from: `"CSIR-NGRI Guest House" <${process.env.EMAIL_USER}>`,

    to:toEmail,
    subject:'CSIR-NGRI Guest House Request Acknowledgement',
    text:`Dear ${name},
    
    We have received your booking request.

    Request No:${bookingId}
    Date:${bookingDate}

    This is not a booking confirmation.
    Your booking status will be updated and intimated 7-15 days before the arrival date based on room availability.

    Please note:
    This is an auto-generated email. Do not reply.

    Thanks & Regards,
    CSIR-NGRI Guest House I/C`,
}
 try{
    await mailTransporter.sendMail(mailOptions);
    console.log("Acknowledgement email sent to",toEmail);
   }
    catch(error){
        console.log("Error in sending Email:",error.message);
    }

  
}

const sendAdminAlertEmail=async({bookingId,applicantName})=>{
    const mailOptions={
        from:`"CSIR-NGRI Guest House" <${process.env.EMAIL_USER}>`,
        to:process.env.EMAIL_ADMIN,
        subject:`New Guest House Booking Received (${bookingId})`,
        text:`
        A new Guest House Booking received 
        Booking Id:${bookingId}
        Applicant:${applicantName}
        
        Please login to admin dashboard to review.
        `
    }
     try{
    await mailTransporter.sendMail(mailOptions);
    console.log("Guest House Booking email sent to", process.env.EMAIL_ADMIN);
   }
    catch(error){
        console.log("Error in sending Email:",error.message);
    }

}

const sendApprovedEmail=async(booking)=>{

    try{
    const templatePath=path.resolve(__dirname,"../template/bookingApproved.html");
    let html=fs.readFileSync(templatePath,"utf-8");
    html=html
    .replace(/{{name}}/g, booking.applicantName)
    .replace(/{{bookingId}}/g, booking.bookingId)
    .replace(/{{arrival}}/g, new Date(booking.arrivalDateTime).toLocaleString())
    .replace(/{{departure}}/g, new Date(booking.departureDateTime).toLocaleString());

    await mailTransporter.sendMail({
        from:`"CSIR-NGRI Guest House"<${process.env.EMAIL_USER}>`,
        to:booking.officialEmail,
        subject:"Booking Approved-CSIR-NGRI Guest House",
        html,
    });
    console.log("Approved mail sent to:",booking.officialEmail);
}catch(error){
    console.error("Error in sending approved email:",error.message);
}
}

const sendRoomAllocationEmail=async(booking)=>{
    try{
    const subject=`Room Allocated - Booking ${booking.bookingId}`;
    const html=`<p>Dear ${booking.applicantName}</p>
    <p>Your Room has been <b>successfully allocated</b>.</p>

    <p><b>Booking ID:</b>${booking.bookingId}</p>
    <p><b>Room Number:</b>${booking.roomNumber}</p>
    <p><b>Room Type:</b>${booking.roomType}</p>

    <p><b>Check-in:</b>${new Date(booking.arrivalDateTime).toLocaleString()}</p>
    <p><b>Check-out:</b>${new Date(booking.departureDateTime).toLocaleString()}</p>

    <p>Please carry a valid ID proof during check-in.</p>
    <p>Regards,<br/>Guest House Administration</p>
    
    
    `;
    await WebTransportError.sendMail({
         from: `"CSIR-NGRI Guest House" <${process.env.EMAIL_USER}>`,
        to:booking.officialEmail,
        subject,
        html,
    });


    console.log("allocation mail sent to:",booking.officialEmail);

}catch(error){
    console.error("Error in sending room allocation email:",error.message);
}

};

const sendRejectedEmail=async(booking)=>{
    try{
    const templatePath=path.resolve(__dirname,"../template/bookingRejected.html");
    let html=fs.readFileSync(templatePath,"utf-8");
    html=html
    .replace(/{{name}}/g, booking.applicantName)
    .replace(/{{bookingId}}/g, booking.bookingId)
    .replace(/{{arrival}}/g, new Date(booking.arrivalDateTime).toLocaleString())
    .replace(/{{departure}}/g, new Date(booking.departureDateTime).toLocaleString());

    await mailTransporter.sendMail({
        from:`"CSIR-NGRI Guest House"<${process.env.EMAIL_USER}>`,
        to:booking.officialEmail,
        subject:"Booking Rejected-CSIR-NGRI Guest House",
        html,
    })
    console.log("Rejected mail sent to:",booking.officialEmail);
}catch(error){
    console.error("Error in sending rejected email:",error.message);
}
}

module.exports= {sendAcknowledgementEmail,sendAdminAlertEmail,sendApprovedEmail,sendRejectedEmail,sendRoomAllocationEmail};