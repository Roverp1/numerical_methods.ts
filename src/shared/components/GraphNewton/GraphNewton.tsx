import { useEffect, useRef } from "react";
import functionPlot from "function-plot";

import newtonMethod from "../../lib/newton_method_deprecated/newton_method";
import { isValidFormula } from "../../lib/isValidFormula/isValidFormula";

import type { NewtonUserInput } from "../../types";

import "./GraphNewton.scss";

type Props = {
  userInput: NewtonUserInput;
  formula: string;
};

type ScatterPoint = {
  points: number[][];
  fnType: "points";
  graphType: "scatter";
  color?: string;
  attr?: {
    r?: number;
  };
};

type FormulaGraph = {
  fn: string;
  derivative?: {
    fn: string;
    x0: number;
  };
};

const GraphNewton = ({ userInput, formula }: Props) => {
  const graphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!graphRef.current) return;

    const isFormulaValid = formula.trim() && isValidFormula(formula);
    const iterations = isFormulaValid
      ? newtonMethod({ userInput, formula }).iterations
      : [];

    const data: (ScatterPoint | FormulaGraph)[] = isFormulaValid
      ? [
          {
            fn: formula,
            // derivative: {
            //   fn: formula,
            //   x0: 2,
            // },
          },
          {
            points: iterations.map((point) => [point.x, point.y]),
            fnType: "points",
            graphType: "scatter",
            color: "red",
            attr: {
              r: 4,
            },
          },
        ]
      : [];

    try {
      functionPlot({
        target: graphRef.current,
        width: graphRef.current.offsetWidth,
        height: graphRef.current.offsetHeight,
        grid: true,
        data,
      });
    } catch (err) {
      console.log(err);
    }
  }, [userInput, formula]);

  return <div className="graph-newton" ref={graphRef} />;
};

export default GraphNewton;
