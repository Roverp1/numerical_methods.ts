const interpolation = () => {
  const x0 = 6;
  const x1 = 9;
  const fx0 = 10;
  const fx1 = 16;
  const x = 7.5;

  const res = x0 + x1 + fx0 + fx1 + x;
  console.log(res);
};

export default interpolation;
