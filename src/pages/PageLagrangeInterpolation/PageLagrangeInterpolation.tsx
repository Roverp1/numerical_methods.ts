import { useEffect, useState } from "react";

import PointsAndFunctionGraph from "../../shared/components/PointsAndFunctionGraph/PointsAndFunctionGraph";

import type { LagrangeInterpolationResult, xyPoints } from "../../shared/types";

import "./PageLagrangeInterpolation.scss";
import PointsInput from "../../widgets/inputs/PointsInput/PointsInput";
import { lagrangePolynomialString } from "../../shared/lib/lagrange_interpolation";

const PageLagrangeInterpolation = () => {
  const [pointsInput, setPointsInput] = useState<string>("");

  const [points, setPoints] = useState<xyPoints>([]);
  const [result, setResult] = useState<LagrangeInterpolationResult | null>(
    null,
  );

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
    const parsedInput = parsePoints(pointsInput);

    if (!parsedInput) return;

    setPoints(parsedInput);
  }, [pointsInput]);

  useEffect(() => {
    try {
      if (points.length <= 0) {
        if (!result) return;

        setResult({
          polynomialString: "",
          success: false,
          error: "No points provided",
        });

        return;
      }

      if (points.length < 2) {
        setResult({
          polynomialString: "",
          success: false,
          error: "You need at least 2 points for interpolation",
        });

        return;
      }

      const polynomialString = lagrangePolynomialString(points);

      setResult({
        polynomialString,
        success: true,
      });
    } catch (err) {
      console.log("err:", err);
    }
  }, [points]);

  return (
    <main className="page-lagrange-interpolation">
      <div className="col col-1">
        <div className="box box-1">
          <PointsInput
            pointsInput={pointsInput}
            setPointsInput={setPointsInput}
          />
        </div>
        <div className="box box-3">Results</div>
      </div>
      <div className="col col-2">
        <div className="box box-4">
          <PointsAndFunctionGraph
            points={points}
            fn={result?.polynomialString}
          />
        </div>
      </div>
    </main>
  );
};

export default PageLagrangeInterpolation;

// [-2, 1],
// [0, 2],
// [1, -1],
// [3, 1],
// [2, 0],
