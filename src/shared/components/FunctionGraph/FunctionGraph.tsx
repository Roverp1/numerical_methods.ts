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

    try {
      functionPlot({
        target: graphRef.current,
        width: graphRef.current.offsetWidth,
        height: graphRef.current.offsetHeight,
        grid: true,

        data: fn
          ? [
              {
                fn,
              },
            ]
          : [],
      });
    } catch (err) {
      console.error(err);
    }
  }, [fn]);

  return <div className="function-graph" ref={graphRef}></div>;
};

export default FunctionGraph;
