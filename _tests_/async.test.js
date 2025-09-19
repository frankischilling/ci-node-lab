const { delaySum } = require('../src/async');

test('delaySum sums after a short wait', async () => {
    const result = await delaySum(2, 5);
    expect(result).toBe(7);
});