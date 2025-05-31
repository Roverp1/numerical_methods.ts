import { useEffect, useState } from "react";

import FunctionGraphInterpolation from "./FunctionGraphInterpolation/FunctionGraphInterpolation";
import leastSquaresApproximation from "../../shared/lib/least_squares_approximation";

import type { xyPoints } from "../../shared/types";

import "./PageLagrangeInterpolation.scss";

type UserInput = {
  points: xyPoints;
  degree: number;
};

const PageLagrangeInterpolation = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
    degree: 1,
  });
  const [approximatedFn, setApproximatedFn] = useState<string>("");

  useEffect(() => {
    setUserInput((prev) => ({
      points: [
        [-2, 1],
        [0, 2],
        [1, -1],
        [3, 1],
        [2, 0],
      ],
      degree: prev.degree,
    }));
  }, []);

  useEffect(() => {
    const P = leastSquaresApproximation(userInput.points, userInput.degree);

    setApproximatedFn("x^2");
  }, [userInput]);

  return (
    <main className="page-lagrange-interpolation">
      <div className="col col-1">
        <div className="box box-1">Input for graph points / calculator</div>
        <div className="box box-3">Results</div>
      </div>
      <div className="col col-2">
        <div className="box box-4">
          <FunctionGraphInterpolation
            points={userInput.points}
            approximatedFn={approximatedFn}
          />
        </div>
      </div>
    </main>
  );
};

export default PageLagrangeInterpolation;
