import type { xyPoints } from "../types";
import {
  buildAugumentedMatrix,
  buildMatrixA,
  buildVectorB,
  forwardElimination,
} from "./least_squares_approximation_imperical";

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

  const result = buildAugumentedMatrix(matrixA, vectorB);

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
