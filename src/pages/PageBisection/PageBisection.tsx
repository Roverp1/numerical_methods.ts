import { useState, useEffect, useRef } from "react";

import SectionResults from "./SectionResults/SectionResults";
import FormInputBisection from "../../widgets/forms/FormInputBisection/FormInputBisection";
import FunctionEditor from "../../shared/ui/inputs/FunctionEditor/FunctionEditor";
// import Keyboard from "../../widgets/Keyboard/Keyboard";
import FunctionGraph from "../../shared/components/FunctionGraph/FunctionGraph";

import bisectionMethod from "../../shared/lib/bisection_method";

// import type { FunctionEditorHandle } from "../../shared/ui/inputs/FunctionEditor/FunctionEditor";
import type { BisectionUserInput } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { BisectionResult } from "../../shared/types";

import "./PageBisection.scss";

const PageBisection = () => {
  const [userInput, setUserInput] = useState<BisectionUserInput>({
    xp: 0,
    xk: 0,
    dokladnosc: 0,
    maxIter: 10000,
  });

  // for FunctionEditor
  const [formula, setFormula] = useState<string>("");

  // const mathRef = useRef<FunctionEditorHandle>(null);
  // const handleInsert = (latex: string) => {
  //   mathRef.current?.insertSymbol(latex);
  // };

  const [result, setResult] = useState<BisectionResult | null>(null);

  useEffect(() => {
    if (userInput.dokladnosc > 0 && userInput.maxIter > 0) {
      const res = bisectionMethod(userInput);
      setResult(res);
    }
  }, [userInput]);

  const onHandleChange = (e: InputChangeEvent) => {
    const changedField = e.target.name; // data from attribute name in input
    const value = e.target.value;

    setUserInput((prev) => {
      let parsedValue: number;

      if (changedField === "maxIter") {
        parsedValue = parseInt(value);
      } else {
        parsedValue = parseFloat(value);
      }

      return {
        ...prev,
        [changedField]: parsedValue,
      };
    });
  };

  return (
    <main className="page-bisection">
      <div className="col col-1">
        <div className="box box-1">
          <FunctionEditor value={formula} onChange={setFormula} />

          {/* <Keyboard onInsert={handleInsert} />
          test1 */}
        </div>
        <div className="box box-3">
          <SectionResults result={result} />
        </div>
      </div>
      <div className="col col-2">
        <div className="box box-2">
          <FormInputBisection onHandleChange={onHandleChange} />
        </div>
        <div className="box box-4">
          <FunctionGraph fn="x^2" />
        </div>
      </div>
    </main>
  );
};

export default PageBisection;
