import FunctionGraphInterpolation from "./FunctionGraphInterpolation/FunctionGraphInterpolation";

import "./PageLagrangeInterpolation.scss";

const PageLagrangeInterpolation = () => {
  return (
    <main className="page-lagrange-interpolation">
      <div className="col col-1">
        <div className="box box-1">Input for graph points / calculator</div>
        <div className="box box-3">Results</div>
      </div>
      <div className="col col-2">
        <div className="box box-4">
          <FunctionGraphInterpolation fn="x^2" />
        </div>
      </div>
    </main>
  );
};

export default PageLagrangeInterpolation;
