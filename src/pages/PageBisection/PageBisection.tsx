import { useState, useEffect } from "react";
import { compile } from "mathjs";

import SectionResults from "./SectionResults/SectionResults";
import FormInputBisection from "../../widgets/forms/FormInputBisection/FormInputBisection";
import { Calculator } from "../../features/calculator";
import FunctionGraph from "../../shared/components/FunctionGraph/FunctionGraph";

import bisectionMethod from "../../shared/lib/bisection_method";

import type { BisectionUserInput, InputFunction } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { BisectionResult } from "../../shared/types";

import "./PageBisection.scss";
import { convertLatexToExpression } from "../../shared/lib/latex/convertLatexToExpression";

const PageBisection = () => {
  const [userInput, setUserInput] = useState<BisectionUserInput>({
    xp: 0,
    xk: 0,
    dokladnosc: 0,
    maxIter: 10000,
  });

  // for FunctionEditor
  const [formula, setFormula] = useState<string>("");
  const [compiledEvaluatedFn, setCompiledEvaluatedFn] = useState<InputFunction | null>(null);

  const [result, setResult] = useState<BisectionResult | null>(null);

  useEffect(() => {
    try {
      const compiledFunc = compile(formula);

      // needed to throw an error if evaluate fails while in try block
      const testValue = compiledFunc.evaluate({ x: 1 });

      const wrapperFunc = (x: number) => compiledFunc.evaluate({ x });
      setCompiledEvaluatedFn(() => wrapperFunc);
    } catch (err) {
      setCompiledEvaluatedFn(null);
    }
  }, [formula]);

  useEffect(() => {
    if (userInput.dokladnosc > 0 && userInput.maxIter > 0 && compiledEvaluatedFn) {
      const res = bisectionMethod(compiledEvaluatedFn, userInput);
      setResult(res);
    }
  }, [userInput, compiledEvaluatedFn]);

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

  // for Calculator
  const onChangeLatex = (latex: string) => {
    const parsed = convertLatexToExpression(latex);
    console.log("Parsed Expression:", parsed);
    setFormula(parsed);
  };

  return (
    <main className="page-bisection">
      <div className="col col-1">
        <div className="box box-1">
          <Calculator onChangeLatex={onChangeLatex} />
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
          <FunctionGraph fn={formula} />
        </div>
      </div>
    </main>
  );
};

export default PageBisection;
