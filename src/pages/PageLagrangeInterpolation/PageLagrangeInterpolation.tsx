import { useEffect, useState } from "react";

import PointsAndFunctionGraph from "../../shared/components/PointsAndFunctionGraph/PointsAndFunctionGraph";

import type { xyPoints } from "../../shared/types";

import "./PageLagrangeInterpolation.scss";
import PointsInput from "../../widgets/inputs/PointsInput/PointsInput";

type UserInput = {
  points: xyPoints;
  degree: number;
};

const PageLagrangeInterpolation = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
    degree: 1,
  });
  const [interpolatedFnString, setInterpolatedFnString] = useState<string>("");

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
    setInterpolatedFnString("x^2");
  }, [userInput]);

  return (
    <main className="page-lagrange-interpolation">
      <div className="col col-1">
        <div className="box box-1">
          <PointsInput />
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
