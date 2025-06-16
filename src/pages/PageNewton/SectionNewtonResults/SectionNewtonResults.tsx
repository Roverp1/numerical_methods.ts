import type { NewtonResult } from "../../../shared/types";

import { LiaAtomSolid, LiaDAndD } from "react-icons/lia";

import "./SectionNewtonResults.scss";

type SectionNewtonResultsProps = {
  result: NewtonResult | null;
};

const SectionNewtonResults = ({ result }: SectionNewtonResultsProps) => {
  if (!result)
    return (
      <>
        <section className="section-results-newton-skeleton">
          Provide data to see results
        </section>
      </>
    );

  const { root, iterations, steps, success, error } = result;

  if (!success) {
    return (
      <section className="section-results-error-newton">
        <LiaDAndD className="icon" />
        <p>{error || "Wrong input data"}</p>
        <p>Try inputing different set of data</p>
      </section>
    );
  }

  return (
    <section className="section-results-newton">
      <ul className="last-iterations">
        {steps.map((step, i) => (
          <li key={i}>
            Iteration {i}: x = {step[0].toFixed(5)}
          </li>
        ))}
      </ul>
      <div className="answer">
        <p className="number-of-iter">Number of iterations: {iterations}</p>
        <p className="root">
          <LiaAtomSolid className="icon" />
          Root: {root}
        </p>
      </div>
    </section>
  );
};

export default SectionNewtonResults;
