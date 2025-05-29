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

export const buildAugumentedMatrix = (
  matrixA: number[][],
  vectorB: number[],
): number[][] => {
  const augumentedMatrix = Array.from(matrixA, (rowA, i) => [
    ...rowA,
    vectorB[i],
  ]);

  return augumentedMatrix;
};

const updateRow = (
  row: number[],
  pivotRow: number[],
  multiplier: number,
  j: number,
) => {
  if (j >= row.length) return row;

  row[j] -= multiplier * pivotRow[j];
  return updateRow(row, pivotRow, multiplier, j + 1);
};

export const forwardElimination = (augMatrix: number[][]): number[][] => {
  const matrixCp = Array.from(augMatrix, (row) =>
    Array.from(row, (cell) => cell),
  );

  for (let pivot = 0; pivot < matrixCp.length; pivot++) {
    for (let i = pivot + 1; i < matrixCp.length; i++) {
      const multiplier = matrixCp[i][pivot] / matrixCp[pivot][pivot];

      // tail recursion
      updateRow(matrixCp[i], matrixCp[pivot], multiplier, 0);

      // imperative analog
      // for (let j = pivot; j < matrixCp[i].length; j++) {
      //   matrixCp[i][j] -= multiplier * matrixCp[pivot][j];
      // }
    }
  }

  return matrixCp;
};
