const nodemailer=require('nodemailer');

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
    console.log("Mail transporter ready");
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

module.exports= {sendAcknowledgementEmail};