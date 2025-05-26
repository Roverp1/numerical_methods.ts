// P(x) = Σ [ Li(x) * yi ] for i = 0 to n
// Li(x) = Π [ (x - xj) / (xi - xj) ] for all j ≠ i

const lagrangeBasis = (
  i: number,
  xValues: number[],
): ((x: number) => number) => {
  const xi = xValues[i];

  // functional
  return (x: number): number =>
    xValues
      .map((xj, j) => ({ xj, j }))
      .filter(({ j }) => j !== i)
      .map(({ xj }) => (x - xj) / (xi - xj))
      .reduce((product, currentValue) => product * currentValue, 1);

  // imperative
  // return (x: number): number => {
  //   let product: number = 1;
  //
  //   for (let j = 0; j < xValues.length; j++) {
  //     if (j === i) continue;
  //
  //     product *= (x - xValues[j]) / (xValues[i] - xValues[j]);
  //   }
  //   return product;
  // };
};
