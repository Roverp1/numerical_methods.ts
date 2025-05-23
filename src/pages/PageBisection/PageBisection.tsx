import { useState, useEffect } from "react";

import SectionResults from "./SectionResults/SectionResults";

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

  return (
    <main className="page-bisection">
      <div className="col col-1">
        <div className="box box-1">test1</div>
        <div className="box box-3">test3</div>
      </div>
      <div className="col col-2">
        <div className="box box-2">
          <form className="page-bisection__given-data">
            <fieldset>
              <legend>Wprowadź swoje dane</legend>

              <label>
                <span>x początkowy:</span>
                <input
                  onChange={onHandleChange}
                  name="xp"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                />
              </label>

              <label>
                <span>x końcowy:</span>
                <input
                  onChange={onHandleChange}
                  name="xk"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                />
              </label>

              <label>
                <span>dokładność:</span>
                <input
                  onChange={onHandleChange}
                  name="dokladnosc"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                />
              </label>

              <label>
                <span>Maksymalna liczba iteracji:</span>
                <input
                  onChange={onHandleChange}
                  name="maxIter"
                  type="text"
                  inputmode="numeric"
                  pattern="[0-9]*"
                />
              </label>
            </fieldset>
          </form>
        </div>
        <div className="box box-4">test4</div>
      </div>

      {/* <form action="" className="page-bisection__function"></form> */}

      <SectionResults result={result} />
    </main>
  );
};

export default PageBisection;
