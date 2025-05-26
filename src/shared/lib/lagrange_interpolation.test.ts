import lagrangePolynomial from "./lagrange_interpolation";

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
