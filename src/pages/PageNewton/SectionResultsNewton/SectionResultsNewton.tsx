import type { NewtonResult } from "../../../shared/types";

import { LiaAtomSolid } from "react-icons/lia";

import "./SectionResultsNewton.scss";

type Props = {
  result: NewtonResult | null;
};

const SectionResultsNewton = ({ result }: Props) => {
  if (!result)
    return (
      <>
        <section className="section-results-newton-skeleton">
          Podaj dane, aby zobaczyć wyniki
        </section>
      </>
    );

  const { root, iterations, steps } = result;

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

export default SectionResultsNewton;
