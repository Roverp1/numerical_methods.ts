import type { xyPoints } from "../types";
import { buildMatrixA, buildVectorB } from "./least_squares_approximation";

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
