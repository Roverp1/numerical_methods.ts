import { useEffect, useRef } from "react";
import functionPlot from "function-plot";

import "./FunctionGraph.scss";

type FunctionGraphProps = {
  fn: string;
};

const FunctionGraph = ({ fn }: FunctionGraphProps) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!graphRef.current) return;

    functionPlot({
      target: graphRef.current,
      width: graphRef.current.offsetWidth,
      // FIX: cutted out numbers in top of the graph
      height: graphRef.current.offsetHeight,
      grid: true,

      data: [
        {
          fn,
        },
      ],
    });
  }, []);

  return (
    <div
      ref={graphRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    ></div>
  );
};

export default FunctionGraph;
