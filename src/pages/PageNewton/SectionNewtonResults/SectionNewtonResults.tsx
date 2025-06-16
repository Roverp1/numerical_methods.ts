import type { NewtonResult } from "../../../shared/types";

import { LiaAtomSolid } from "react-icons/lia";

import "./SectionNewtonResults.scss";

type SectionNewtonResultsProps = {
  result: NewtonResult | null;
};

const SectionNewtonResults = ({ result }: SectionNewtonResultsProps) => {
  if (!result)
    return (
      <>
        <section className="section-results-newton-skeleton">
          Podaj dane, aby zobaczyć wyniki
        </section>
      </>
    );

  const { root, iterations, steps, success, error } = result;

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
