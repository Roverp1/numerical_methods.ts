import { LiaDAndD, LiaAtomSolid } from "react-icons/lia";

import "./SectionResults.scss";

import type { BisectionResult } from "../../../shared/types";

const SectionResults = ({ result }: { result: BisectionResult | null }) => {
  // prettier-ignore
  if (!result)
    return (
      <section className="section-results-skeleton-bisection">
        Podaj dane, aby zobaczyć wyniki
      </section>
    );

  const { success, root, iterations, steps, error } = result;

  if (!success) {
    return (
      <section className="section-results-error-bisection">
        <LiaDAndD className="icon" />
        <p>{error || "Wrong input data"}</p>
        <p>Try inputing different set of data</p>
      </section>
    );
  }

  return (
    <section className="section-results-bisection">
      <ul className="last-iterations">
        {steps.slice(-8, -1).map((step) => (
          <li className="iteration" key={step.iteration}>
            x0 = {step.x0.toFixed(3)}, after {step.iteration} iterations.
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

export default SectionResults;
