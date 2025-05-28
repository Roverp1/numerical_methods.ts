const newtonMethod = () => {
  const f = (x) => x * x - 2;
  const dokladnosc = 0.002;
  let x = 2; // початкове наближення
  let maxIterations = 100;
  let currentIteration = 1; // один, тому що ми вже один раз знайшли x_new до циклу

  const f_pochodna = (x) => {
    let h = 0.0001; // крок вліво і вправо

    return (f(x + h) - f(x - h)) / (2 * h);
    // 2 * h --> це ширина між двома точками
  };

  let x_new = x - f(x) / f_pochodna(x);
  console.log("x after 1 step: ", x_new);

  while (Math.abs(x - x_new) > dokladnosc && currentIteration <= maxIterations) {
    x = x_new;
    x_new = x - f(x) / f_pochodna(x);
    currentIteration = currentIteration + 1;
    console.log(`x after ${currentIteration} steps: ${x_new}`);
  }

  return x_new;
};

newtonMethod();
export default newtonMethod;
