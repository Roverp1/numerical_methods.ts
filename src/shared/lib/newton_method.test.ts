import newtonMethod, { newtonMethodWithTracking } from "./newton_method";

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

describe("newtonMethodWithTracking", () => {
  it("should return correct function root (example from the lecture)", () => {
    const fn = (x: number) => x ** 3 - x ** 2 + 2 * x - 1;
    const xp = 1;
    const tolerance = 0.1;

    const expected = 0.574074074;
    const result = newtonMethodWithTracking(fn, xp, tolerance);

    expect(result.root).toBeCloseTo(expected);
  });

  it("should find a root for f(x) = x^2 - 4", () => {
    const fn = (x: number) => x ** 2 - 4;
    const xp = 3;

    const result = newtonMethodWithTracking(fn, xp, 1e-6, 20);

    expect(result.success).toBe(true);
    expect(result.root).toBeCloseTo(2, 4);
    expect(result.steps.length).toBeGreaterThan(0);
  });

  it("should fail if derivative is zero", () => {
    const fn = (_x: number) => 5;

    const result = newtonMethodWithTracking(fn, 0);

    expect(result.success).toBe(false);
    expect(result.error).toMatch(/Derivate/i);
  });

  it("should fail if max iterations is too small", () => {
    const fn = (x: number) => x ** 2 - 2;

    const result = newtonMethodWithTracking(fn, 1, 1e-10, 1);

    expect(result.success).toBe(false);
    expect(result.error).toMatch(/max iterations/i);
  });

  it("should track all steps in proper format", () => {
    const fn = (x: number) => x ** 2 - 4;

    const result = newtonMethodWithTracking(fn, 3);

    expect(
      result.steps.every((step) => Array.isArray(step) && step.length === 2),
    ).toBe(true);
  });
});
