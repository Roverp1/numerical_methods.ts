import type { NewtonResult, xyPoints } from "../types";

type Fn = (x: number) => number;

// (f(x + h) - f(x - h)) / (2 * h)
const symmetricDifferenceQuotient = (fn: Fn, h: number = 1e-5): Fn => {
  return (x: number) => (fn(x + h) - fn(x - h)) / (2 * h);
};

const newtonMethod = (
  fn: Fn,
  xp: number,
  tolerance: number = 1e-6,
  maxIter: number = 1000,
): number => {
  const dfn = symmetricDifferenceQuotient(fn);

  const recursionHelper = (xc: number, i: number = 0) => {
    if (i >= maxIter) return NaN;

    const xn = xc - fn(xc) / dfn(xc);

    if (Math.abs(xn - xc) < tolerance) return xn;

    return recursionHelper(xn, i + 1);
  };

  return recursionHelper(xp);

  // imperative approach
  // for (let i = 0; i < limit; i++) {
  //   const xn = xc - fn(xc) / dfn(xc);
  //
  //   if (Math.abs(xn - xc) < tolerance) return xn;
  //
  //   xc = xn;
  // }
  //
  // console.error("Root not found");
  // return NaN;
};

export const newtonMethodWithTracking = (
  fn: Fn,
  xp: number,
  tolerance: number = 1e-6,
  maxIter: number = 1000,
): NewtonResult => {
  const steps: xyPoints = [];
  const dfn = symmetricDifferenceQuotient(fn);

  const recursionHelper = (xc: number, i: number = 0) => {
    try {
      if (i >= maxIter) throw new Error("Max iterations reached");

      const fx = fn(xc);
      const dfx = dfn(xc);

      if (dfx === 0) throw new Error("Derivate equals 0 - method fails");

      steps.push([xc, fx] as const);

      const xn = xc - fx / dfx;

      if (Math.abs(xn - xc) < tolerance) {
        steps.push([xn, fn(xn)] as const);

        return {
          root: xn,
          iterations: i + 1,
          steps: steps,
          success: true,
        };
      }

      return recursionHelper(xn, i + 1);
    } catch (err) {
      return {
        root: NaN,
        iterations: i,
        steps: steps,
        success: false,
        error: (err as Error).message,
      };
    }
  };

  return recursionHelper(xp);
};

export default newtonMethod;
