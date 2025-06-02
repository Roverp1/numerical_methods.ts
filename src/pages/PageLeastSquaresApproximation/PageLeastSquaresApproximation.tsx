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
  const [pointsInput, setPointsInput] = useState<string>("");

  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
    degree: 1,
  });
  const [result, setResult] = useState<LeastSquaresApproxResult | null>(null);

  const parsePoints = (input: string): xyPoints | null => {
    try {
      const wrapped = `[${input}]`;

      const parsed = JSON.parse(wrapped);

      if (
        Array.isArray(parsed) &&
        parsed.every(
          (point) =>
            Array.isArray(point) &&
            point.length === 2 &&
            point.every((n) => typeof n === "number"),
        )
      ) {
        return parsed as xyPoints;
      }

      return null;
    } catch (err) {
      console.log("err:", err);
      return null;
    }
  };

  useEffect(() => {
    console.log("parsePoints:", parsePoints(pointsInput));

    const parsedInput = parsePoints(pointsInput);

    if (!parsedInput) return;

    setUserInput((prev) => ({
      points: parsedInput,
      degree: prev.degree,
    }));
  }, [pointsInput]);

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
        <div className="box box-1">
          <div className="inputs-container">
            <input
              className="points-input"
              type="text"
              value={pointsInput}
              onChange={(e) => setPointsInput(e.target.value)}
              placeholder="Input points, eg: [1, 5], [2, 3], [3, 6]"
            />

            <input
              type="number"
              className="degree-input"
              value={userInput.degree}
              onChange={(e) => {
                let newDegree: number = 1;
                if (e.target.value) {
                  newDegree = Math.min(parseInt(e.target.value), 100);
                }

                setUserInput((prev) => ({
                  points: prev.points,
                  degree: newDegree,
                }));
              }}
            />
          </div>

          <input
            type="range"
            className="degree-input-range"
            min="1"
            max="100"
            value={userInput.degree}
            onChange={(e) =>
              setUserInput((prev) => ({
                points: prev.points,
                degree: parseInt(e.target.value),
              }))
            }
          />
        </div>
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
