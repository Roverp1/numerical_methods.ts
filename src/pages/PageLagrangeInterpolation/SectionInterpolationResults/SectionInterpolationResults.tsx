import { LiaDAndD } from "react-icons/lia";

import "./SectionInterpolationResults.scss";

import type { LagrangeInterpolationResult } from "../../../shared/types";

import { StaticMathField } from "react-mathquill";

type SectionInterpolationResultsProps = {
  result: LagrangeInterpolationResult | null;
};

const SectionInterpolationResults = ({
  result,
}: SectionInterpolationResultsProps) => {
  if (!result)
    return (
      <section className="section-results-skeleton-interpolation">
        Provide data to see results
      </section>
    );

  const { polynomialString, y, success, error } = result;

  if (!success) {
    return (
      <section className="section-results-error-interpolation">
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
    <section className="section-results-interpolation">
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
      {y !== undefined && (
        <p className="y">
          <StaticMathField>{`P(x) = ${y}`}</StaticMathField>
        </p>
      )}
    </section>
  );
};

export default SectionInterpolationResults;
