import type { xyPoints } from "../types";

export const buildMatrix = (points: xyPoints, degree: number): number[][] => {
  const matrix: number[][] = [];

  for (let i = 0; i <= degree; i++) {
    matrix.push([]);

    for (let j = 0; j <= degree; j++) {
      const xs = points.map(([x]) => x);
      const sum = xs.reduce((sum, x) => sum + x ** (i + j), 0);

      matrix[i].push(sum);
    }
  }
  return matrix;
};
