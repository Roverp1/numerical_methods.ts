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

export const buildAugmentedMatrix = (
  matrixA: number[][],
  vectorB: number[],
): number[][] => {
  const augmentedMatrix = Array.from(matrixA, (rowA, i) => [
    ...rowA,
    vectorB[i],
  ]);

  return augmentedMatrix;
};

const updateRow = (
  row: number[],
  pivotRow: number[],
  multiplier: number,
  j: number,
): number[] => {
  if (j >= row.length) return row;

  // not so pure
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

const sumOfComputedValuesRecursive = (
  row: number[],
  results: number[],
  colIndex: number,
  sum: number = 0,
): number => {
  if (colIndex >= row.length - 1) return sum;
  return sumOfComputedValuesRecursive(
    row,
    results,
    colIndex + 1,
    sum + results[colIndex] * row[colIndex],
  );
};

const computeResults = (
  augMatrix: number[][],
  row: number,
  results: number[],
): number[] => {
  if (row < 0) return results;

  const y = augMatrix[row][augMatrix[row].length - 1];
  const coefficient = augMatrix[row][row];

  // functional, with nested tail recursion ->
  const sumOfComputedValues = sumOfComputedValuesRecursive(
    augMatrix[row],
    results,
    row + 1,
  );

  // functional, with pure helpers ->
  // const sumOfComputedValues = augMatrix[row]
  //   .slice(row + 1, augMatrix[row].length - 1)
  //   .reduce((acc, cur, j) => acc + cur * results[row + 1 + j], 0);

  // imperative ->
  // let sumOfComputedValues = 0;
  // for (let j = row + 1; j < matrix[row].length - 1; j++) {
  //   const xValue = results[j];
  //   const xCoefficientValue = matrix[row][j];
  //
  //   sumOfComputedValues += xValue * xCoefficientValue;
  // }

  const x_i = (y - sumOfComputedValues) / coefficient;

  // pure functions
  const resultsCp = [...results];
  resultsCp[row] = x_i;

  // tail recursion
  return computeResults(augMatrix, row - 1, resultsCp);
};

export const backSubstitution = (upperTriMatrix: number[][]): number[] => {
  const initialResults: number[] = Array(upperTriMatrix.length).fill(0);

  return computeResults(
    upperTriMatrix,
    upperTriMatrix.length - 1,
    initialResults,
  );
};

export const getCoefficients = (points: xyPoints, degree: number): number[] => {
  const matrixA = buildMatrixA(points, degree);
  const vectorB = buildVectorB(points, degree);

  const augmentedMatrix = buildAugmentedMatrix(matrixA, vectorB);

  const upperTriMatrix = forwardElimination(augmentedMatrix);
  const coefficients = backSubstitution(upperTriMatrix);

  return coefficients;
};

export const approximatedPolynomialString = (
  points: xyPoints,
  degree: number,
): string => {
  const coefficients = getCoefficients(points, degree);

  const polynomialString = coefficients
    .map((coef, i) => `${coef.toFixed(3)} * x^${i}`)
    .join(" + ");

  return polynomialString;
};

// A * c = B
const leastSquaresApproximation = (
  points: xyPoints,
  degree: number,
): ((x: number) => number) => {
  const matrixA = buildMatrixA(points, degree);
  const vectorB = buildVectorB(points, degree);

  const augmentedMatrix = buildAugmentedMatrix(matrixA, vectorB);

  const upperTriMatrix = forwardElimination(augmentedMatrix);
  const coefficients = backSubstitution(upperTriMatrix);

  // functional
  return (x) =>
    coefficients
      .map((coef, i) => coef * x ** i)
      .reduce((acc, cur) => acc + cur);

  // imperative
  // return (x) => {
  //   let sum = 0;
  //   for (let i = 0; i <= degree; i++) {
  //     sum += coefficients[i] * x ** i;
  //   }
  //   return sum;
  // };
};

export default leastSquaresApproximation;
