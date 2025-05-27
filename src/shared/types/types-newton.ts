export type Func = (x: number) => number;

export interface NewtonMethodOptions {
  f: Func;
  fPochodna: Func;
  x0: number;
  dokladnosc?: number;
  maxIter?: number;
}
