import type { BisectionUserInput, InputFunction, Steps } from "../types";
import type { BisectionResult } from "../types";

const bisectionMethod = (
  fn: InputFunction | null,
  userInput: BisectionUserInput,
): BisectionResult => {
  if (!fn || fn.length === 0 || typeof fn(1) !== "number" || isNaN(fn(1)))
    return {
      root: NaN,
      iterations: 0,
      success: false,
      steps: [],
      error: "No function provided",
    };

  let { xp, xk } = userInput;
  const { dokladnosc, maxIter } = userInput;

  // Input validation
  if (isNaN(xp) || isNaN(xk) || isNaN(dokladnosc) || isNaN(maxIter)) {
    return {
      root: NaN,
      iterations: 0,
      success: false,
      steps: [],
      error: "Invalid numeric input",
    };
  }

  // Bisection method must have different signs on the xp and xk
  if (fn(xp) * fn(xk) >= 0) {
    return {
      root: NaN,
      iterations: 0,
      success: false,
      steps: [],
      error: "Initial values must bracket a root (function signs must differ)",
    };
  }

  let fp = fn(xp)!;
  let x0: number = 0;
  let f0: number;

  const steps: Steps = [];

  for (let i = 1; i <= maxIter; i++) {
    x0 = (xp + xk) / 2;

    try {
      f0 = fn(x0)!;
      if (typeof f0 !== "number" || isNaN(f0)) throw new Error();
    } catch (err) {
      return {
        root: NaN,
        iterations: i,
        success: false,
        steps,
        error: `Function returned NaN or threw an error at x = ${x0}`,
      };
    }
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
    error: `Root not found in ${maxIter} iterations`,
  };
};

export default bisectionMethod;
