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
    if (i >= maxIter) return xc;

    const xn = xc - fn(xc) / dfn(xc);

    if (Math.abs(xn - xc) < tolerance) return xn;

    return recursionHelper(xn, i + 1);
  };

  return recursionHelper(xp);

  // for (let i = 0; i < limit; i++) {
  //   const xn = xc - fn(xc) / dfn(xc);
  //
  //   if (Math.abs(xn - xc) < tolerance) return xn;
  //
  //   xc = xn;
  // }

  console.error("Root not found");
  return NaN;
};

export default newtonMethod;
