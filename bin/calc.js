#!/usr/bin/env node
const { sum, subtract, multiply, divide } = require('../src/math');

const [, , op, a, b] = process.argv;

try {
    let result;
    switch (op) {
        case 'add': result = sum(a, b); break;
        case 'sub': result = subtract(a, b); break;
        case 'mul': result = multiply(a, b); break;
        case 'div': result = divide(a, b); break;
        default:
            console.log('Usage: calc <add|sub|mul|div> <a> <b>');
            process.exit(1);
    }
    console.log(result);
} catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
}