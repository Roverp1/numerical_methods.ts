import { useState, useEffect } from "react";

import SectionResults from "./SectionResults/SectionResults";
import FormInputBisection from "../../widgets/forms/FormInputBisection/FormInputBisection";
import FunctionEditor from "../../shared/ui/textarea/FunctionEditor/FunctionEditor";

import bisectionMethod from "../../shared/lib/bisection_method";

import type { BisectionUserInput } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { BisectionResult } from "../../shared/types";

import "./PageBisection.scss";

const PageBisection = () => {
  const [userInput, setUserInput] = useState<BisectionUserInput>({
    xp: 0,
    xk: 0,
    dokladnosc: 0,
    maxIter: 0,
  });

  // for FunctionEditor
  const [formula, setFormula] = useState<string>("");
  console.log("formula: " + formula);

  const [result, setResult] = useState<BisectionResult | null>(null);

  useEffect(() => {
    if (userInput.dokladnosc > 0 && userInput.maxIter > 0) {
      const res = bisectionMethod(userInput);
      setResult(res);
    }
  }, [userInput]);

  console.log("result: " + result?.success);
  console.log("result: " + result?.root);
  console.log("result: " + result?.iterations);

  const onHandleChange = (e: InputChangeEvent) => {
    const changedField = e.target.name; // data from attribute name in input
    const value = e.target.value;
    console.log("value:", value);

    setUserInput((prev) => ({
      ...prev,
      [changedField]: value,
    }));
  };

  console.log(userInput);

  // for Calrulator

  // const handleInsertSymbol = (symbol: string) => {
  //   setFormula((prev) => prev + symbol)
  // }

  return (
    <main className="page-bisection">
      <div className="col col-1">
        <div className="box box-1">
          <FunctionEditor value={formula} onChange={setFormula} />
          test1
        </div>
        <div className="box box-3">
          <SectionResults result={result} />
        </div>
      </div>
      <div className="col col-2">
        <div className="box box-2">
          <FormInputBisection onHandleChange={onHandleChange} />
        </div>
        <div className="box box-4">test4</div>
      </div>

      {/* <form action="" className="page-bisection__function"></form> */}
    </main>
  );
};

export default PageBisection;
