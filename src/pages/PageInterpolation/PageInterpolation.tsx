import { useState } from "react";

import SectionResultsInterpolation from "./SectionResultsInterpolation/SectionResultsInterpolation";

import type { InterpolationUserInput } from "../../shared/types/types-interpolations";

import "./PageInterpolation.scss";

const PageInterpolation = () => {
  const [userInput, setUserInput] = useState<InterpolationUserInput>({
    x0: 6,
    x1: 9,
    fx0: 10,
    fx1: 16,
    x: 7.5,
  });
  return (
    <>
      <main className="page-interpolation">
        <div className="col col-1">
          <div className="box box-1">test1</div>
          <div className="box box-3">
            <SectionResultsInterpolation userInput={userInput} />
          </div>
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
