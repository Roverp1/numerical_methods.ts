import { useEffect, useState } from "react";

import PointsAndFunctionGraph from "../../shared/components/PointsAndFunctionGraph/PointsAndFunctionGraph";
import leastSquaresApproximation, {
  approximatedPolynomialString,
} from "../../shared/lib/least_squares_approximation";

import type { xyPoints } from "../../shared/types";

import "./PageLeastSquaresApproximation.scss";
import SectionResults from "./SectionResults/SectionResults";

type UserInput = {
  points: xyPoints;
  degree: number;
};

const PageLeastSquaresApproximation = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    points: [],
    degree: 2,
  });
  const [approximatedFnString, setApproximatedFnString] = useState<string>("");

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
    const polynomialString = approximatedPolynomialString(
      userInput.points,
      userInput.degree,
    );
    console.log("polynomialString:", polynomialString);

    setApproximatedFnString(polynomialString);
  }, [userInput]);

  return (
    <main className="page-least-squares-approximation">
      <div className="col col-1">
        <div className="box box-1">Input for graph points / calculator</div>
        <div className="box box-3">
          <SectionResults />
        </div>
      </div>
      <div className="col col-2">
        <div className="box box-4">
          <PointsAndFunctionGraph
            points={userInput.points}
            fn={approximatedFnString}
          />
        </div>
      </div>
    </main>
  );
};

export default PageLeastSquaresApproximation;
