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
      <section className="section-results-skeleton-approximation">
        Provide data to see results
      </section>
    );

  const { polynomialString, coefficients, success, error } = result;

  if (!success) {
    return (
      <section className="section-results-error-approximation">
        <LiaDAndD className="icon" />
        <p>{error || "Wrong input data"}</p>
        <p>Try inputing different set of data</p>
      </section>
    );
  }

  const polynomialStringToLatex = (polynomialString: string): string[] => {
    const latexString = polynomialString
      .replace(/\*/g, "\\cdot")
      .replace(/x\^([0-9]+)/g, (_, power) => `x^{${power}}`);

    const term = latexString.split(" + ");

    return term;
  };

  const polynomialTerms = polynomialStringToLatex(polynomialString);

  return (
    <section className="section-results-approximation">
      <div className="polynomial-string">
        <h3 className="title">Polynomial String:</h3>
        <p className="polynomial">
          {/* cause mathquill string do not wrap */}
          {/* string needs to be split into an array */}
          {/* and then rendered by mapping throu that array */}
          {polynomialTerms.map((term, i) =>
            i < polynomialTerms.length - 1 ? (
              <StaticMathField>{`${term} + `}</StaticMathField>
            ) : (
              <StaticMathField>{term}</StaticMathField>
            ),
          )}
        </p>
      </div>
      <p className="coefficients">
        {coefficients.map((coef, i) => (
          <span className="coefficient">
            <StaticMathField>{`a_{${i}} = ${coef.toFixed(3)}`}</StaticMathField>
          </span>
        ))}
      </p>
    </section>
  );
};

export default SectionResults;
