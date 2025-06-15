import { useEffect, useState } from "react";
import { compile } from "mathjs";

import Calculator from "../../features/calculator/Calculator";
import FormInputNewton from "./FormInputNewton/FormInputNewton";
import SectionResultsNewton from "./SectionResultsNewton/SectionResultsNewton";
import GraphNewton from "../../shared/components/GraphNewton/GraphNewton";

import { convertLatexToExpression } from "../../shared/lib/latex/convertLatexToExpression";
import { newtonMethodWithTracking } from "../../shared/lib/newton_method";

import type { InputFunction, NewtonUserInput } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { NewtonResult } from "../../shared/types";

import "./PageNewton.scss";

const PageNewton = () => {
  const [userInput, setUserInput] = useState<NewtonUserInput>({
    tolerance: 0,
    maxIter: 1000,
    xp: 0,
  });

  const [formula, setFormula] = useState<string>("");
  const [compiledEvaluatedFn, setCompiledEvaluatedFn] =
    useState<InputFunction | null>(null);
  const [result, setResult] = useState<NewtonResult | null>(null);

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

  // for FormInputNewton
  const onHandleChange = (e: InputChangeEvent) => {
    const changedField = e.target.name; // data from attribute name in input
    const value = e.target.value;

    setUserInput((prev) => {
      let parsedValue: number;

      if (changedField === "maxIterations") {
        parsedValue = parseInt(value);
      } else {
        parsedValue = parseFloat(value);
      }

      parsedValue = isNaN(parsedValue) ? 0 : parsedValue;

      return {
        ...prev,
        [changedField]: parsedValue,
      };
    });
  };

  // for newtonMethod
  useEffect(() => {
    const { xp, tolerance, maxIter } = userInput;

    if (xp && tolerance > 0 && maxIter > 0 && compiledEvaluatedFn) {
      const res = newtonMethodWithTracking(
        compiledEvaluatedFn,
        xp,
        tolerance,
        maxIter,
      );

      setResult(res);
    }
  }, [userInput, compiledEvaluatedFn]);

  // for Calculator
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
          <div className="box box-3">
            <SectionResultsNewton result={result} />
          </div>
        </div>
        <div className="col col-2">
          <div className="box box-2">
            <FormInputNewton onHandleChange={onHandleChange} />
          </div>
          <div className="box box-4">
            {/* <GraphNewton userInput={userInput} formula={formula} /> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNewton;
