function toNumber(x) {
    const n = Number(x);
    if (Number.isNaN(n)) throw new Error('Input is not a number');
    return n;
}

function sum(a, b) {
    return toNumber(a) + toNumber(b);
}

function subtract(a, b) {
    return toNumber(a) - toNumber(b);
}

function multiply(a, b) {
    return toNumber(a) * toNumber(b);
}

function divide(a, b) {
    const B = toNumber(b);
    if (B === 0) throw new Error('Cannot divide by zero');
    return toNumber(a) / B;
}

function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Empty array');
    }
    const total = arr.reduce((acc, x) => acc + toNumber(x), 0);
    return total / arr.length;
}

function clamp(value, min, max) {
    const v = toNumber(value);
    const lo = toNumber(min);
    const hi = toNumber(max);
    return Math.min(Math.max(v, lo), hi);
}

function isEven(n) {
    return toNumber(n) % 2 === 0;
}

module.exports = {
    sum, subtract, multiply, divide, average, clamp, isEven
};