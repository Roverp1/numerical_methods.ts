import { useEffect, useState } from "react";

import Calculator from "../../features/calculator/Calculator";
import FormInputNewton from "./FormInputNewton/FormInputNewton";
import SectionResultsNewton from "./SectionResultsNewton/SectionResultsNewton";
import GraphNewton from "../../shared/components/GraphNewton/GraphNewton";

import { convertLatexToExpression } from "../../shared/lib/latex/convertLatexToExpression";
import newtonMethod from "../../shared/lib/newton_method/newton_method";

import type { NewtonUserInput } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { NewtonResult } from "../../shared/types";

import "./PageNewton.scss";

const PageNewton = () => {
  const [userInput, setUserInput] = useState<NewtonUserInput>({
    dokladnosc: 0,
    maxIterations: 10000,
  });

  // for SectionResultsNewton
  const [result, setResult] = useState<NewtonResult | null>(null);

  // for FunctionEditor
  const [formula, setFormula] = useState<string>("");

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

      return {
        ...prev,
        [changedField]: parsedValue,
      };
    });
  };

  // for newtonMethod
  useEffect(() => {
    if (userInput.dokladnosc > 0 && userInput.maxIterations > 0) {
      const res = newtonMethod({ userInput, formula });
      setResult(res);
    }
  }, [userInput, formula]);

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
            <GraphNewton userInput={userInput} formula={formula} />
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNewton;
