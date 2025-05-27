const interpolation = () => {
  const x0 = 6;
  const x1 = 9;
  const fx0 = 10;
  const fx1 = 16;
  const x = 7.5;

  const fx = fx0 + ((x - x0) / (x1 - x0)) * (fx1 - fx0);

  return {
    fx,
  };
};

export default interpolation;
