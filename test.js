const { add, subtract } = require('./calculator');

test('adds numbers correctly', () => {
    expect(add(2,3)).toBe(5);
});

test('subtract numbers correctly', () => {
    expect(subtract(5,3)).toBe(2);
});
