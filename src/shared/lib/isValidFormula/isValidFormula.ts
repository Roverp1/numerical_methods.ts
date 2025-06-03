import { compile } from "mathjs";

export const isValidFormula = (formula: string): boolean => {
  try {
    const expression = compile(formula);
    expression.evaluate({ x: 1 });
    return true;
  } catch {
    return false;
  }
};
