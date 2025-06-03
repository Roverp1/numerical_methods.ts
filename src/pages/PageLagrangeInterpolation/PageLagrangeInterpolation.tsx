import { useEffect, useState } from "react";

import PointsAndFunctionGraph from "../../shared/components/PointsAndFunctionGraph/PointsAndFunctionGraph";

import type { xyPoints } from "../../shared/types";

import "./PageLagrangeInterpolation.scss";
import PointsInput from "../../widgets/inputs/PointsInput/PointsInput";

type UserInput = {
  points: xyPoints;
};

const PageLagrangeInterpolation = () => {
  const [pointsInput, setPointsInput] = useState<string>("");

  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
  });
  const [interpolatedFnString, setInterpolatedFnString] = useState<string>("");

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

    setUserInput((prev) => ({
      points: parsedInput,
    }));
  }, [pointsInput]);

  useEffect(() => {
    setUserInput((prev) => ({
      points: [
        [-2, 1],
        [0, 2],
        [1, -1],
        [3, 1],
        [2, 0],
      ],
    }));
  }, []);

  useEffect(() => {
    setInterpolatedFnString("x^2");
  }, [userInput]);

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
            points={userInput.points}
            fn={interpolatedFnString}
          />
        </div>
      </div>
    </main>
  );
};

export default PageLagrangeInterpolation;
