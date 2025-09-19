function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delaySum(a, b) {
    await delay(50); // pretend to do work
    const n1 = Number(a), n2 = Number(b);
    if (Number.isNaN(n1) || Number.isNaN(n2)) throw new Error('Input is not a number');
    return n1 + n2;
}

module.exports = { delay, delaySum };