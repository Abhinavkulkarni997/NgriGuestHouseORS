const MS_PER_DAY = 1000 * 60 * 60 * 24;

module.exports.calculateInvoice = ({
    from,
    to,
    ratePerDay,
    gstPercent = 0
}) => {
    const start = new Date(from);
    const end = new Date(to);

    const diffTime = end - start;

    const numberOfDays = Math.max(1, Math.ceil(diffTime / MS_PER_DAY));

    const subtotal = numberOfDays * ratePerDay;
    const gstAmount = (subtotal * gstPercent) / 100;
    const total = subtotal + gstAmount;

    return {
        numberOfDays,
        subtotal,
        gstAmount,
        total
    };
};
