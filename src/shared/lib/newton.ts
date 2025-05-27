import type { NewtonMethodOptions } from "../types/types-newton";

const newtonMethod = ({
  f,
  fPochodna,
  x0,
  dokladnosc = 0.000001,
  maxIter = 10,
}: NewtonMethodOptions): number => {
  let x = x0;

  for (let i = 0; i < maxIter; i++) {
    const fx = f(x);
    const fpx = fPochodna(x);

    if (Math.abs(fpx) < 1e-12) {
      throw new Error("Похідна майже дорівнює 0. Метод не працює.");
    }

    const nextX = x - fx / fpx;

    console.log(`Крок ${i + 1}: x = ${nextX.toFixed(6)}`);

    if (Math.abs(nextX - x) < dokladnosc) {
      return nextX;
    }

    x = nextX;
  }

  return x;
};

export default newtonMethod;
