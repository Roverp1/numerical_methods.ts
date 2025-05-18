import type { UserInput } from "../types";

const func = (x: number) => {
  return 7 - x * x;
};

const bisection_method = (userInput: UserInput) => {
  let { xp, xk, dokladnosc, maxIter } = userInput;
  let fp = func(xp);
  let x0: number = 0;
  let f0: number;

  for (let i = 0; i < maxIter; i++) {
    x0 = (xp + xk) / 2;
    f0 = func(x0);

    if (Math.abs(f0) < dokladnosc) {
      console.log("x0:", x0);
      console.log(`Found root after ${i} number of iterations`);
      return;
    }

    if (f0 * fp < 0) {
      xk = x0;
    } else {
      xp = x0;
      fp = f0;
    }
  }
  console.error("x0:", x0);
  console.log(`Root not found after ${maxIter} number of iterations`);
};

export default bisection_method;
