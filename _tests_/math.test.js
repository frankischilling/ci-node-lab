const { sum, subtract, multiply, divide, average, clamp, isEven } = require('../src/math');

describe('math helpers', () => {
    test('sum works', () => expect(sum(2, 3)).toBe(6)); // WRONG on purpose
    test('subtract works', () => expect(subtract(5, 3)).toBe(2));
    test('multiply works', () => expect(multiply(4, 3)).toBe(12));
    test('divide works', () => expect(divide(10, 2)).toBe(5));
    test('divide by zero throws', () => expect(() => divide(1, 0)).toThrow('Cannot divide by zero'));
    test('average works', () => expect(average([2, 4, 6])).toBe(4));
    test('clamp works', () => {
        expect(clamp(10, 0, 5)).toBe(5);
        expect(clamp(-1, 0, 5)).toBe(0);
        expect(clamp(3, 0, 5)).toBe(3);
    });
    test.each([[0, true], [1, false], [2, true], [99, false]])('isEven(%i)', (n, expected) => {
        expect(isEven(n)).toBe(expected);
    });
});