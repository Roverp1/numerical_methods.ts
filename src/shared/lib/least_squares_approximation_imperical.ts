import type { xyPoints } from "../types";

export const buildMatrixA = (points: xyPoints, degree: number): number[][] => {
  const matrix: number[][] = [];

  for (let i = 0; i <= degree; i++) {
    matrix.push([]);

    for (let j = 0; j <= degree; j++) {
      let sum = 0;

      for (let row = 0; row < points.length; row++) {
        sum += points[row][0] ** (i + j);
      }
      // const xs = points.map(([x]) => x);
      // const sum = xs.reduce((sum, x) => sum + x ** (i + j), 0);

      matrix[i].push(sum);
    }
  }
  return matrix;
};

export const buildVectorB = (points: xyPoints, degree: number): number[] => {
  const vector: number[] = [];

  for (let i = 0; i <= degree; i++) {
    let sum = 0;

    for (let row = 0; row < points.length; row++) {
      const x = points[row][0];
      const y = points[row][1];

      sum += y * x ** i;
    }
    vector.push(sum);
  }

  // const vector: number[] = Array.from({ length: degree + 1 }, (_, i) =>
  //   points.reduce((sum, [x, y]) => sum + y * x ** i, 0),
  // );

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

export const forwardElimination = (augMatrix: number[][]): number[][] => {
  const matrixCp = Array.from(augMatrix, (row) =>
    Array.from(row, (cell) => cell),
  );

  for (let pivot = 0; pivot < matrixCp.length; pivot++) {
    for (let i = pivot + 1; i < matrixCp.length; i++) {
      const multiplier = matrixCp[i][pivot] / matrixCp[pivot][pivot];

      for (let j = pivot; j < matrixCp[i].length; j++) {
        matrixCp[i][j] -= multiplier * matrixCp[pivot][j];
      }
    }
  }

  return matrixCp;
};

export const backSubstitution = (upperTriMatrix: number[][]): number[] => {
  const AUG_COLUMN_INDEX = upperTriMatrix[0].length - 1;

  const results: number[] = Array(upperTriMatrix.length).fill(0);

  for (let i = upperTriMatrix.length - 1; i >= 0; i--) {
    let sumOfKnownValues = 0;

    for (let j = i + 1; j < upperTriMatrix.length - 1; j++) {
      const xValue = results[j];
      const xCoefficientValue = upperTriMatrix[i][j];

      sumOfKnownValues += xValue * xCoefficientValue;
    }

    results[i] =
      (upperTriMatrix[i][AUG_COLUMN_INDEX] - sumOfKnownValues) /
      upperTriMatrix[i][i];
  }

  return results;
};
