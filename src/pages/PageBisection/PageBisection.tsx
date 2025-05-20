import { useState, useEffect } from "react";

import SectionResults from "./SectionResults/SectionResults";

import bisection_method from "../../shared/lib/bisection_method";

import type { UserInput } from "../../shared/types";
import type { InputChangeEvent } from "../../shared/types";
import type { BisectionResult } from "../../shared/types";

import "./PageBisection.scss";

const PageBisection = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    xp: 0,
    xk: 0,
    dokladnosc: 0,
    maxIter: 0,
  });

  const [result, setResult] = useState<BisectionResult | null>(null);

  useEffect(() => {
    if (userInput.dokladnosc > 0 && userInput.maxIter > 0) {
      const res = bisection_method(userInput);
      setResult(res);
    }
  }, [userInput]);

  console.log("result: " + result?.success);
  console.log("result: " + result?.root);
  console.log("result: " + result?.iterations);

  const onHandleChange = (e: InputChangeEvent) => {
    const changedField = e.target.name; // data from attribute name in input
    const value = e.target.value;

    setUserInput((prev) => ({
      ...prev,
      [changedField]: value,
    }));
  };

  console.log(userInput);

  return (
    <main className="page-bisection">
      <form className="page-bisection__given-data">
        <fieldset>
          <legend>Wprowadź swoje dane</legend>

          <label>x początkowy:</label>
          <input onChange={onHandleChange} name="xp" type="number" />

          <label>x końcowy:</label>
          <input onChange={onHandleChange} name="xk" type="number" />

          <label>dokładność:</label>
          <input onChange={onHandleChange} name="dokladnosc" type="number" />

          <label>Maksymalna liczba iteracji:</label>
          <input onChange={onHandleChange} name="maxIter" type="number" />
        </fieldset>
      </form>

      <SectionResults result={result} />
    </main>
  );
};

export default PageBisection;
