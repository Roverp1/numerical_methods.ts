import { LiaDAndD } from "react-icons/lia";

import "./SectionResults.scss";

import type { LeastSquaresApproxResult } from "../../../shared/types";
import { StaticMathField } from "react-mathquill";

const SectionResults = ({
  result,
}: {
  result: LeastSquaresApproxResult | null;
}) => {
  if (!result)
    return (
      <section className="section-results-skeleton">
        Provide data to see results
      </section>
    );

  const { polynomialString, coefficients, success, error } = result;

  if (!success) {
    return (
      <section className="section-results-error">
        <LiaDAndD className="icon" />
        <p>{error || "Wrong input data"}</p>
        <p>Try inputing different set of data</p>
      </section>
    );
  }

  const polynomialStringToLatex = (polynomialString: string): string => {
    const latexString = polynomialString.replace(/\*/g, "\\cdot");

    return latexString;
  };

  return (
    <section className="section-results">
      <div className="polynomial-string">
        <h3 className="title">Polynomial String:</h3>
        <p className="polynomial">
          <StaticMathField>
            {polynomialStringToLatex(polynomialString)}
          </StaticMathField>
        </p>
      </div>
      <p className="coefficients">
        {coefficients.map((coef, i) => (
          <>
            <span className="coefficient">
              a{i}: {coef.toFixed(3)}
            </span>
          </>
        ))}
      </p>
    </section>
  );
};

export default SectionResults;
