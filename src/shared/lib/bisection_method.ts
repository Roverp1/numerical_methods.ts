import type { BisectionUserInput } from "../types";
import type { BisectionResult } from "../types";

const func = (x: number) => {
  return 7 - x * x;
};

const bisectionMethod = (userInput: BisectionUserInput): BisectionResult => {
  let { xp, xk } = userInput;
  const { dokladnosc, maxIter } = userInput;

  // Input validation
  if (isNaN(xp) || isNaN(xk) || isNaN(dokladnosc) || isNaN(maxIter)) {
    return {
      root: NaN,
      iterations: 0,
      success: false,
      steps: [],
    };
  }

  // Bisection method must have different signs on the xp and xk
  if (xp * xk >= 0) {
    return {
      root: NaN,
      iterations: 0,
      success: false,
      steps: [],
    };
  }

  let fp = func(xp);
  let x0: number = 0;
  let f0: number;

  const steps: {
    iteration: number;
    x0: number;
  }[] = [];

  for (let i = 1; i <= maxIter; i++) {
    x0 = (xp + xk) / 2;
    f0 = func(x0);

    steps.push({
      iteration: i,
      x0: x0,
    });

    if (Math.abs(f0) < dokladnosc || Math.abs(xk - xp) < dokladnosc) {
      return { root: x0, iterations: i, success: true, steps };
    }

    if (f0 * fp < 0) {
      xk = x0;
    } else {
      xp = x0;
      fp = f0;
    }
  }

  return {
    root: x0,
    iterations: maxIter,
    success: false,
    steps,
  };
};

export default bisectionMethod;
