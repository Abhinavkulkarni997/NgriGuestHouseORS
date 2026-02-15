// const MS_PER_DAY = 1000 * 60 * 60 * 24;

// module.exports.calculateInvoice = ({
//     from,
//     to,
//     ratePerDay,
//     numberOfRooms=1,
//     gstPercent = 0
// }) => {
//     const start = new Date(from);
//     const end = new Date(to);

//     const diffTime = end - start;

//     const numberOfDays = Math.max(1, Math.ceil(diffTime / MS_PER_DAY));

//     const subtotal = numberOfDays * ratePerDay*numberOfRooms;
//     const gstAmount = (subtotal * gstPercent) / 100;
//     const total = subtotal + gstAmount;

//     return {
//         numberOfDays,
//         subtotal,
//         gstAmount,
//         total
//     };
// };

// code developed on 16-02-2026 

const MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports.calculateInvoice = ({
    from,
    to,
    ratePerDay,
    numberOfRooms = 1,
    gstPercent = 0
}) => {

    const start = new Date(from);
    const end = new Date(to);

    if (isNaN(start) || isNaN(end)) {
        throw new Error("Invalid date provided for invoice calculation");
    }

    if (end <= start) {
        throw new Error("Departure date must be after arrival date");
    }

    const diffTime = end - start;

    const numberOfDays = Math.ceil(diffTime / MS_PER_DAY);

    const subtotal = numberOfDays * ratePerDay * numberOfRooms;
    const gstAmount = (subtotal * gstPercent) / 100;
    const total = subtotal + gstAmount;

    return {
        numberOfDays,
        subtotal,
        gstAmount,
        total
    };
};
