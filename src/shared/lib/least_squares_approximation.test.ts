import type { xyPoints } from "../types";
import {
  backSubstitution,
  buildAugmentedMatrix,
  buildMatrixA,
  buildVectorB,
  forwardElimination,
} from "./least_squares_approximation";

test("build matrixA for 1st degree polynomial", () => {
  const points: xyPoints = [
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 4],
  ];

  const expected = [
    [4, 10],
    [10, 30],
  ];

  const result = buildMatrixA(points, 1);

  expect(result).toEqual(expected);
});

test("build matrixA for 2nd degree polynomial", () => {
  const points: xyPoints = [
    [-2, 1],
    [0, 2],
    [1, -1],
    [3, 1],
    [2, 0],
  ];

  const expected = [
    [5, 4, 18],
    [4, 18, 28],
    [18, 28, 114],
  ];

  const result = buildMatrixA(points, 2);

  expect(result).toEqual(expected);
});

test("build vectorB for 1st degree polynomial", () => {
  const points: xyPoints = [
    [1, 1],
    [2, 2],
    [3, 2],
    [4, 4],
  ];

  const expected = [9, 27];

  const result = buildVectorB(points, 1);

  expect(result).toEqual(expected);
});

test("build vectorB for 2nd degree polynomial", () => {
  const points: xyPoints = [
    [-2, 1],
    [0, 2],
    [1, -1],
    [3, 1],
    [2, 0],
  ];

  const expected = [3, 0, 12];

  const result = buildVectorB(points, 2);

  expect(result).toEqual(expected);
});

test("build augumented matrix from matrixA and vectorB", () => {
  const matrixA = [
    [5, 4, 18],
    [4, 18, 28],
    [18, 28, 114],
  ];

  const vectorB = [3, 0, 12];

  const expected = [
    [5, 4, 18, 3],
    [4, 18, 28, 0],
    [18, 28, 114, 12],
  ];

  const result = buildAugmentedMatrix(matrixA, vectorB);

  expect(result).toEqual(expected);
});

test("apply forward elimination on augumented matrix", () => {
  const augMatrix1 = [
    [5, 4, 18, 3],
    [4, 18, 28, 0],
    [18, 28, 114, 12],
  ];

  const augMatrix2 = [
    [2, 1, 5],
    [4, 4, 16],
  ];

  const expected1 = [
    [5, 4, 18, 3],
    [0, 18, 28, 0],
    [0, 0, 114, 12],
  ];

  const expected2 = [
    [2, 1, 5],
    [0, 2, 6],
  ];

  const result1 = forwardElimination(augMatrix1);
  const result2 = forwardElimination(augMatrix2);

  // expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});

test("solve system of equestions for 2nd degree polynomial", () => {
  const matrixA = [
    [5, 4, 18],
    [4, 18, 28],
    [18, 28, 114],
  ];

  const vectorB = [3, 0, 12];

  const augMatrix = buildAugmentedMatrix(matrixA, vectorB);
  const upperTriMatrix = forwardElimination(augMatrix);

  const expected = [0.464, -0.247, 0.093];

  const result = backSubstitution(upperTriMatrix);

  expected.forEach((value, i) => expect(result[i]).toBeCloseTo(value));
});

test("solves simple 2x2 upper triangular system", () => {
  const upperTriMatrix = [
    [2, 3, 8],
    [0, 1, 2],
  ];

  const expected = [1, 2];

  expected.forEach((val, i) => {
    expect(backSubstitution(upperTriMatrix)[i]).toBeCloseTo(val, 5);
  });
});

test("solves 3x3 upper triangular system", () => {
  const upperTriMatrix = [
    [1, 2, -1, 2],
    [0, 1, 1, 3],
    [0, 0, 1, 1],
  ];

  const expected = [-1, 2, 1];

  expected.forEach((val, i) => {
    expect(backSubstitution(upperTriMatrix)[i]).toBeCloseTo(val, 5);
  });
});
