const nodemailer=require('nodemailer');
const fs=require('fs');
const path=require('path');
// creation of transportation object 
 const mailTransporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    }
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
    console.log("Guest House Booking email sent to",to);
   }
    catch(error){
        console.log("Error in sending Email:",error.message);
    }

}

const sendApprovedEmail=async(booking)=>{
    const templatePath=path.join(__dirname,"../template/bookingApproved.html");
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
    })
}

const sendRejectedEmail=async(booking)=>{
    const templatePath=path.join(__dirname,"../template/bookingRejected.html");
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
}

module.exports= {sendAcknowledgementEmail,sendAdminAlertEmail,sendApprovedEmail,sendRejectedEmail};