import type { InterpolationUserInput } from "../types/types-interpolations";

const interpolation = (userInput: InterpolationUserInput) => {
  const { x0, x1, fx0, fx1, x } = userInput;

  const fx = fx0 + ((x - x0) / (x1 - x0)) * (fx1 - fx0);

  return {
    fx,
  };
};

export default interpolation;
