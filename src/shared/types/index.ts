export interface BisectionUserInput {
  xp: number;
  xk: number;
  dokladnosc: number;
  maxIter: number;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type Steps = {
  iteration: number;
  x0: number;
}[];

export type BisectionResult = {
  root: number;
  iterations: number;
  success: boolean;
  steps: Steps;
  error?: string;
};

export type LagrangeInterpolationResult = {
  polynomialString: string;
  success: boolean;
  error?: string;
};

export type LeastSquaresApproxResult = {
  polynomialString: string;
  coefficients: number[];
  success: boolean;
  error?: string;
};

export type InputFunction = (x: number) => number;

export type xyPoints = [number, number][];
