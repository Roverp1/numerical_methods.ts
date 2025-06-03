import { useEffect, useRef } from "react";
import functionPlot from "function-plot";

import newtonMethod from "../../lib/newton_method/newton_method";
import { isValidFormula } from "../../lib/isValidFormula/isValidFormula";

import type { NewtonUserInput } from "../../types";

import "./GraphNewton.scss";

type Props = {
  userInput: NewtonUserInput;
  formula: string;
};

const GraphNewton = ({ userInput, formula }: Props) => {
  const graphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!formula.trim()) return;
    if (!isValidFormula(formula)) return;
    if (!graphRef.current) return;

    const { iterations } = newtonMethod({ userInput, formula });

    functionPlot({
      target: graphRef.current as HTMLElement,
      width: 600,
      height: 400,
      yAxis: { domain: [-2, 5] },
      xAxis: { domain: [0, 3] },
      data: [
        {
          fn: formula,
          graphType: "polyline",
        },
        {
          points: iterations.map((point) => [point.x, point.y]),
          fnType: "points",
          graphType: "scatter",
          color: "red",
        },
      ],
    });
  }, [userInput, formula]);

  return <div className="graph-newton" ref={graphRef} />;
};

export default GraphNewton;
