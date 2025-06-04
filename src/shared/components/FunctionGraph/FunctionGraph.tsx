import { useCallback, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import "./FunctionGraph.scss";

type FunctionGraphProps = {
  fn: string;
};

const FunctionGraph = ({ fn }: FunctionGraphProps) => {
  const graphRef = useRef<HTMLDivElement>(null);

  console.log(fn);

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

        data: fn
          ? [
              {
                fn,
                scope: {
                  pi: Math.PI,
                  e: Math.E,
                },
              },
            ]
          : [],
      });
    } catch (err) {
      console.error(err);
    }
  }, [fn]);

  useEffect(() => {
    drawGraph();
    window.addEventListener("resize", drawGraph);

    return () => {
      window.removeEventListener("resize", drawGraph);
    };
  }, [drawGraph]);

  return <div className="function-graph" ref={graphRef}></div>;
};

export default FunctionGraph;
