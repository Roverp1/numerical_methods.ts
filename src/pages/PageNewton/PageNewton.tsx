import { useState } from "react";

import Calculator from "../../features/calculator/Calculator";
import GraphNewton from "../../shared/components/GraphNewton/GraphNewton";

import { convertLatexToExpression } from "../../shared/lib/latex/convertLatexToExpression";

import "./PageNewton.scss";

const PageNewton = () => {
  const [formula, setFormula] = useState<string>("");

  const onChangeLatex = (latex: string) => {
    const parsed = convertLatexToExpression(latex);
    setFormula(parsed);
  };

  return (
    <>
      <main className="page-newton">
        <div className="col col-1">
          <div className="box box-1">
            <Calculator onChangeLatex={onChangeLatex} />
          </div>
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
