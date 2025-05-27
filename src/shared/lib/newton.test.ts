import newtonMethod from "./newton";

const f = (x: number) => x * x - 2;
const fPochodna = (x: number) => 2 * x;

describe("Newton method", () => {
  it("finds root of x^2 - 2", () => {
    const result = newtonMethod({
      f,
      fPochodna,
      x0: 1,
      dokladnosc: 1e-6,
      maxIter: 10,
    });

    expect(result).toBeCloseTo(Math.sqrt(2), 5);
  });
});
