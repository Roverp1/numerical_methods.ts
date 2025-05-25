export interface BisectionUserInput {
  xp: number;
  xk: number;
  dokladnosc: number;
  maxIter: number;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type BisectionResult = {
  root: number;
  iterations: number;
  success: boolean;
  steps?: {
    iteration: number;
    x0: number;
  }[];
};
