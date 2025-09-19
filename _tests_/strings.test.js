const { toTitleCase } = require('../src/strings');

test('toTitleCase', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('mIxEd cAsE')).toBe('Mixed Case');
});