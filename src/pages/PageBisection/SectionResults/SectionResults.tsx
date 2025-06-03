import { LiaDAndD, LiaAtomSolid } from "react-icons/lia";

import "./SectionResults.scss";
import "./SectionResultsError.scss";

import type { BisectionResult } from "../../../shared/types";

const SectionResults = ({ result }: { result: BisectionResult | null }) => {
  if (!result) return;
  <section className="section-results-skeleton">Provide data to see results</section>;

  const { success, root, iterations, steps, error } = result;

  if (!success) {
    return (
      <section className="section-results-error">
        <LiaDAndD className="icon" />
        <p>{error || "Wrong input data"}</p>
        <p>Try inputing different set of data</p>
      </section>
    );
  }

  return (
    <section className="section-results">
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
