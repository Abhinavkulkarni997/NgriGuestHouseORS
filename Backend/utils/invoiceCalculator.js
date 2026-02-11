// calculation of milliseconds per day
const MS_PER_DAY=1000*60*60*24;

module.exports.calculateInvoice=({
    from,
    to,
    ratePerDay,
    gstPercent
})=>{
    const numberOfDays=Math.ceil(1,Math.ceil((to-from)/MS_PER_DAY));
    const subtotal=numberOfDays*ratePerDay;
    const gstAmount=(subtotal*gstPercent)/100;
    const total = subtotal + gstAmount;
    return{
        numberOfDays,
        subtotal,
        gstAmount,
        total
    };
    
};