import { useEffect, useRef } from "react";
import functionPlot from "function-plot";

import newtonMethod from "../../lib/newton_method/newton_method";

import "./GraphNewton.scss";

const GraphNewton = () => {
  const graphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const { iterations } = newtonMethod();

    if (!graphRef.current) return;

    functionPlot({
      target: graphRef.current as HTMLElement,
      width: 600,
      height: 400,
      yAxis: { domain: [-2, 5] },
      xAxis: { domain: [0, 3] },
      data: [
        {
          fn: "x^2 - 2",
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
  }, []);

  return <div className="graph-newton" ref={graphRef} />;
};

export default GraphNewton;
