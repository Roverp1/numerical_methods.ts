import lagrangePolynomial, {
  lagrangePolynomialString,
} from "./lagrange_interpolation";

test("interpolates basic points", () => {
  const points: [number, number][] = [
    [0, 1],
    [1, 3],
    [2, 2],
  ];

  const P = lagrangePolynomial(points);

  expect(P(0)).toBeCloseTo(1);
  expect(P(1)).toBeCloseTo(3);
  expect(P(2)).toBeCloseTo(2);
});

test("test lagrangePolynomial with M.A. examle", () => {
  const points: [number, number][] = [
    [-1, -8],
    [0, -1],
    [1, 0],
    [2, 7],
  ];

  const P = lagrangePolynomial(points);

  expect(P(0.5)).toBeCloseTo(-0.5);
  expect(P(-0.5)).toBeCloseTo(-3);
});

describe("lagrangePolynomialString", () => {
  it("should return the correct Lagrange polynomial string", () => {
    const points: [number, number][] = [
      [1, 2],
      [2, 3],
      [3, 4],
    ];

    const result = lagrangePolynomialString(points);

    expect(result).toBe(
      "2 * ((x - 2) / (1 - 2)) * ((x - 3) / (1 - 3)) + " +
        "3 * ((x - 1) / (2 - 1)) * ((x - 3) / (2 - 3)) + " +
        "4 * ((x - 1) / (3 - 1)) * ((x - 2) / (3 - 2))",
    );
  });
});
