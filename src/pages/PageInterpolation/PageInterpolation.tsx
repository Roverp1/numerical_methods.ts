import interpolation from "../../shared/lib/interpolation";

import "./PageInterpolation.scss";

const PageInterpolation = () => {
  const result = interpolation();
  console.log(result.fx);
  return (
    <>
      <main className="page-interpolation">
        <div className="col col-1">
          <div className="box box-1">test1</div>
          <div className="box box-3"></div>
        </div>
        <div className="col col-2">
          <div className="box box-2">test2</div>
          <div className="box box-4">test4</div>
        </div>
      </main>
    </>
  );
};

export default PageInterpolation;
