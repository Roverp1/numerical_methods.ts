import { TbFaceIdError } from "react-icons/tb";

import "./SectionResults.scss";
import "./SectionResultsError.scss";

import type { BisectionResult } from "../../../shared/types";
import { Fragment } from "react/jsx-runtime";

const SectionResults = ({ result }: { result: BisectionResult | null }) => {
  if (!result) return null;

  const { success, root, iterations, steps } = result;

  if (!success) {
    return (
      <section className="section-results-error">
        <TbFaceIdError className="icon" />
        <p>Nieprawidłowe dane do obliczenia formuły</p>
        <p>Spróbuj wprowadzić inne dane</p>
      </section>
    );
  }

  console.log(steps);

  return (
    <section className="section-results">
      <ul className="last-iterations">
        {steps.slice(-7, -1).map((step) => (
          <li className="iteration" key={step.iteration}>
            x0 = {step.x0.toFixed(3)}, after {step.iteration} iterations.
          </li>
        ))}
      </ul>
      <div className="answer">
        <div>Number of iterations: {iterations}</div>
        <div>Root: {root}</div>
      </div>
    </section>
  );
};

export default SectionResults;
