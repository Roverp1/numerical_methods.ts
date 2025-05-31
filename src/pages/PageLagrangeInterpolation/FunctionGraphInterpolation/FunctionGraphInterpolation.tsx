import { useCallback, useEffect, useRef } from "react";
import functionPlot from "function-plot";
import type { FunctionPlotDatum } from "function-plot";

import "./FunctionGraphInterpolation.scss";
import type { xyPoints } from "../../../shared/types";

type FunctionGraphProps = {
  points: xyPoints;
  approximatedFn: string;
};

const FunctionGraphInterpolation = ({
  points,
  approximatedFn,
}: FunctionGraphProps) => {
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
              r: 3,
            },
          },
          approximatedFn && {
            fn: approximatedFn,
          },
        ].filter(Boolean) as FunctionPlotDatum[],
      });
    } catch (err) {
      console.error(err);
    }
  }, [points, approximatedFn]);

  useEffect(() => {
    drawGraph();
    window.addEventListener("resize", drawGraph);

    return () => {
      window.removeEventListener("resize", drawGraph);
    };
  }, [drawGraph]);

  return <div className="function-graph-interpolation" ref={graphRef}></div>;
};

export default FunctionGraphInterpolation;
