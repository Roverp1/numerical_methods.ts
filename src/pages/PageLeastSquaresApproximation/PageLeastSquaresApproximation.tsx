import { useEffect, useState } from "react";

import PointsAndFunctionGraph from "../../shared/components/PointsAndFunctionGraph/PointsAndFunctionGraph";
import leastSquaresApproximation, {
  approximatedPolynomialString,
  getCoefficients,
} from "../../shared/lib/least_squares_approximation";

import type { LeastSquaresApproxResult, xyPoints } from "../../shared/types";

import "./PageLeastSquaresApproximation.scss";
import SectionResults from "./SectionResults/SectionResults";

type UserInput = {
  points: xyPoints;
  degree: number;
};

const PageLeastSquaresApproximation = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
    degree: 3,
  });
  const [result, setResult] = useState<LeastSquaresApproxResult | null>(null);

  useEffect(() => {
    setUserInput((prev) => ({
      points: [
        [1, 5],
        [2, 3],
        [3, 6],
        [4, 3.5],
        [5, 4.5],
        [6, 7],
        [7, 5.5],
      ] as xyPoints,
      degree: prev.degree,
    }));
  }, []);

  useEffect(() => {
    try {
      if (userInput.points.length <= 0) {
        setResult({
          polynomialString: "",
          coefficients: [],
          success: false,
          error: "No points provided",
        });

        return;
      }

      if (userInput.points.length < 3) {
        setResult({
          polynomialString: "",
          coefficients: [],
          success: false,
          error: "You need at least 3 points for approximation",
        });

        return;
      }

      const coefficients = getCoefficients(userInput.points, userInput.degree);
      const polynomialString = approximatedPolynomialString(
        userInput.points,
        userInput.degree,
      );

      if (coefficients.some(Number.isNaN)) {
        setResult({
          polynomialString: "",
          coefficients: [],
          success: false,
          error: "Coefficients contains NaN, input is incorrect",
        });

        return;
      }

      setResult({
        polynomialString,
        coefficients,
        success: true,
      });
    } catch (err) {
      console.log("err:", err);
    }
  }, [userInput]);

  return (
    <main className="page-least-squares-approximation">
      <div className="col col-1">
        <div className="box box-1">Input for graph points / calculator</div>
        <div className="box box-3">
          <SectionResults result={result} />
        </div>
      </div>
      <div className="col col-2">
        <div className="box box-4">
          <PointsAndFunctionGraph
            points={userInput.points}
            fn={result?.polynomialString}
          />
        </div>
      </div>
    </main>
  );
};

export default PageLeastSquaresApproximation;
