import type { NewtonUserInput } from "../../types";

const newtonMethod = (userInput: NewtonUserInput) => {
  if (!userInput || userInput.dokladnosc <= 0) {
    return {
      result: NaN,
      iterations: [],
    };
  }
  // console.log(userInput);
  const { dokladnosc, maxIterations } = userInput;

  const f = (x: number): number => x * x - 2;
  let x = 2; // початкове наближення

  const f_pochodna = (x: number): number => {
    const h = 0.0001; // крок вліво і вправо

    return (f(x + h) - f(x - h)) / (2 * h);
    // 2 * h --> це ширина між двома точками
  };

  const iterations: { x: number; y: number }[] = [{ x, y: f(x) }]; // iterations[].png
  let x_new = x - f(x) / f_pochodna(x);
  console.log("x after 1 step: ", x_new);

  let currentIteration = 1; // один, тому що ми вже один раз знайшли x_new до циклу

  while (Math.abs(x - x_new) > dokladnosc && currentIteration <= maxIterations) {
    x = x_new;
    x_new = x - f(x) / f_pochodna(x);
    currentIteration = currentIteration + 1;
    iterations.push({ x, y: f(x) });
    // console.log(`x after ${currentIteration} steps: ${x_new}`);
  }

  return { result: x_new, iterations };
};

// newtonMethod();
export default newtonMethod;
