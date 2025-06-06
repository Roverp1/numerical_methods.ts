import { evaluate } from "mathjs";

import type { NewtonIterationPoints, NewtonUserInput } from "../../types";
import type { StepsNewton } from "../../types";
import type { NewtonResult } from "../../types";

type NewtonMethodParams = {
  userInput: NewtonUserInput;
  formula: string;
};

const newtonMethod = ({ userInput, formula }: NewtonMethodParams): NewtonResult => {
  if (!userInput || userInput.dokladnosc <= 0) {
    return {
      root: NaN,
      iterations: [],
      steps: [],
    };
  }

  const { dokladnosc, maxIterations } = userInput;
  let { xPoczatkowy } = userInput;

  const f = (x: number): number => {
    try {
      return evaluate(formula, { x });
    } catch (err) {
      console.error("Помилка при обчисленні формули:", err);
      return NaN;
    }
  };

  // const xPoczafrftkowy = 2; // початкове наближення

  const f_pochodna = (x: number): number => {
    const h = 0.0001; // крок вліво і вправо

    return (f(x + h) - f(x - h)) / (2 * h);
    // 2 * h --> це ширина між двома точками
  };

  const fx = f(xPoczatkowy);
  const dfx = f_pochodna(xPoczatkowy);

  if (isNaN(fx) || isNaN(dfx)) {
    console.error("Invalid f(x) or f'(x):", fx, dfx);
    return {
      root: NaN,
      iterations: [],
      steps: [],
    };
  }

  const steps: StepsNewton = [];

  const iterations: NewtonIterationPoints[] = [{ x: xPoczatkowy, y: f(xPoczatkowy) }]; // iterations[].png
  // let x_new = xPoczatkowy - f(xPoczatkowy) / f_pochodna(xPoczatkowy);
  let x_new = xPoczatkowy - fx / dfx;

  let currentIteration = 1; // один, тому що ми вже один раз знайшли x_new до циклу

  steps.push({
    currentIteration: currentIteration,
    x_new: x_new,
  });

  while (Math.abs(xPoczatkowy - x_new) > dokladnosc && currentIteration <= maxIterations) {
    xPoczatkowy = x_new;
    x_new = xPoczatkowy - f(xPoczatkowy) / f_pochodna(xPoczatkowy);
    currentIteration = currentIteration + 1;

    iterations.push({ x: xPoczatkowy, y: f(xPoczatkowy) });

    steps.push({
      currentIteration: currentIteration,
      x_new: x_new,
    });
  }

  return { root: x_new, iterations, steps };
};

export default newtonMethod;
