import GraphNewton from "../../shared/components/GraphNewton/GraphNewton";

import "./PageNewton.scss";

const PageNewton = () => {
  return (
    <>
      <main className="page-newton">
        <div className="col col-1">
          <div className="box box-1">test1</div>
          <div className="box box-3">test3</div>
        </div>
        <div className="col col-2">
          <div className="box box-2">test2</div>
          <div className="box box-4">
            <GraphNewton />
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNewton;
