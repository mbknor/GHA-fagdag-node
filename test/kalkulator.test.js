const { expect, test } = require("@jest/globals");
const sum = require("../src/kalkulator");

test("1 + 2 er 3", () => {
  expect(1 + 2).toBe(3);
});
