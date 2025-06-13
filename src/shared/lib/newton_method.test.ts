import newtonMethod from "./newton_method";

describe("newtonMethod", () => {
  it("should return correct function root", () => {
    const fn = (x: number) => 7 - x ** 2;
    const xp = 6;
    const tolerance = 0.2;

    const expected = 2.65625;
    const result = newtonMethod(fn, xp, tolerance);

    expect(result).toBeCloseTo(expected, 1);
  });

  it("should return correct function root (example from the lecture)", () => {
    const fn = (x: number) => x ** 3 - x ** 2 + 2 * x - 1;
    const xp = 1;
    const tolerance = 0.1;

    const expected = 0.574074074;
    const result = newtonMethod(fn, xp, tolerance);

    expect(result).toBeCloseTo(expected);
  });
});
