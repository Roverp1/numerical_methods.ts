import { useCallback, useEffect, useRef } from "react";
import functionPlot from "function-plot";

import "./FunctionGraphInterpolation.scss";

type FunctionGraphProps = {
  fn: string;
};

const FunctionGraphInterpolation = ({ fn }: FunctionGraphProps) => {
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
