const sum = require('./sum');

test("test case1 testing sum method", () => {
    expect(sum(12, 2)).toBe(14);
});

test("test case2 testing sum method", () => {
    expect(sum(12, 2)).toBe(13);
});