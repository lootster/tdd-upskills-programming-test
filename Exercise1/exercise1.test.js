const computeSum = require("./exercise1");

describe("Exercise-one", () => {
  it("should return 80", () => {
    const n = 4;
    const a = 2;
    const r = 3;
    let result = computeSum(n, a, r);
    expect(result).toBe(80);
  });
  it("should return 242", () => {
    const n = 5;
    const a = 2;
    const r = 3;
    let result = computeSum(n, a, r);
    expect(result).toBe(242);
  });
});
