import type { xyPoints } from "../types";

export const buildMatrixA = (points: xyPoints, degree: number): number[][] => {
  // no loop mutability
  const matrix: number[][] = Array.from({ length: degree + 1 }, (_, i) =>
    Array.from({ length: degree + 1 }, (_, j) =>
      points.map(([x]) => x).reduce((sum, x) => sum + x ** (i + j), 0),
    ),
  );

  // const matrix: number[][] = [];
  //
  // for (let i = 0; i <= degree; i++) {
  //   matrix.push([]);
  //
  //   for (let j = 0; j <= degree; j++) {
  //     const xs = points.map(([x]) => x);
  //     const sum = xs.reduce((sum, x) => sum + x ** (i + j), 0);
  //
  //     matrix[i].push(sum);
  //   }
  // }
  return matrix;
};

export const buildVectorB = (points: xyPoints, degree: number): number[] => {
  const vector: number[] = Array.from({ length: degree + 1 }, (_, i) =>
    points.reduce((sum, [x, y]) => sum + y * x ** i, 0),
  );

  return vector;
};
