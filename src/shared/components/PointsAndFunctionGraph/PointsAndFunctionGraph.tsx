import { useCallback, useEffect, useRef } from "react";
import functionPlot from "function-plot";
import type { FunctionPlotDatum } from "function-plot";

import "./PointsAndFunctionGraph.scss";
import type { xyPoints } from "../../types";

type PointsAndFunctionGraphProps = {
  points: xyPoints;
  fn?: string;
};

const PointsAndFunctionGraph = ({
  points,
  fn,
}: PointsAndFunctionGraphProps) => {
  const graphRef = useRef<HTMLDivElement>(null);

  const drawGraph = useCallback(() => {
    if (!graphRef.current) return;

    graphRef.current.innerHTML = "";

    const width = graphRef.current.offsetWidth;
    const height = graphRef.current.offsetHeight;

    try {
      functionPlot({
        target: graphRef.current,
        width,
        height,
        grid: true,

        data: [
          points.length > 0 && {
            points,
            fnType: "points",
            graphType: "scatter",
            attr: {
              r: 4,
            },
          },
          fn && {
            fn: fn,
          },
        ].filter(Boolean) as FunctionPlotDatum[],
      });
    } catch (err) {
      console.error(err);
    }
  }, [points, fn]);

  useEffect(() => {
    drawGraph();
    window.addEventListener("resize", drawGraph);

    return () => {
      window.removeEventListener("resize", drawGraph);
    };
  }, [drawGraph]);

  return <div className="points-and-function-graph" ref={graphRef}></div>;
};

export default PointsAndFunctionGraph;
