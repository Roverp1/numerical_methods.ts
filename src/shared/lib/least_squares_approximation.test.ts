import type { xyPoints } from "../types";
import { buildMatrix } from "./least_squares_approximation";

test("build matrix for 1st degree polynomial", () => {
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

  const result = buildMatrix(points, 1);

  expect(result).toEqual(expected);
});

test("build matrix for 2nd degree polynomial", () => {
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

  const result = buildMatrix(points, 2);
  console.log("result:", result);

  expect(result).toEqual(expected);
});
