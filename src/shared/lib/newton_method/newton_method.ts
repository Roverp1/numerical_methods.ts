import { evaluate } from "mathjs";

import type { NewtonUserInput } from "../../types";
import type { StepsNewton } from "../../types";

type NewtonMethodParams = {
  userInput: NewtonUserInput;
  formula: string;
};

const newtonMethod = ({ userInput, formula }: NewtonMethodParams) => {
  if (!userInput || userInput.dokladnosc <= 0) {
    return {
      root: NaN,
      iterations: [],
      steps: [],
    };
  }

  const { dokladnosc, maxIterations } = userInput;

  const f = (x: number): number => {
    try {
      return evaluate(formula, { x });
    } catch (err) {
      console.error("Помилка при обчисленні формули:", err);
      return NaN;
    }
  };
  let x = 2; // початкове наближення

  const f_pochodna = (x: number): number => {
    const h = 0.0001; // крок вліво і вправо

    return (f(x + h) - f(x - h)) / (2 * h);
    // 2 * h --> це ширина між двома точками
  };
  const steps: StepsNewton = [];

  const iterations: { x: number; y: number }[] = [{ x, y: f(x) }]; // iterations[].png
  let x_new = x - f(x) / f_pochodna(x);

  let currentIteration = 1; // один, тому що ми вже один раз знайшли x_new до циклу

  steps.push({
    currentIteration: currentIteration,
    x_new: x_new,
  });

  while (Math.abs(x - x_new) > dokladnosc && currentIteration <= maxIterations) {
    x = x_new;
    x_new = x - f(x) / f_pochodna(x);
    currentIteration = currentIteration + 1;
    iterations.push({ x, y: f(x) });

    steps.push({
      currentIteration: currentIteration,
      x_new: x_new,
    });
  }

  return { root: x_new, iterations, steps };
};

export default newtonMethod;
