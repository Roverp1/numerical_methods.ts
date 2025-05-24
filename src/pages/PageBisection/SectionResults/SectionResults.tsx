import { TbFaceIdError } from "react-icons/tb";

import "./SectionResults.scss";
import "./SectionResultsError.scss";

import type { BisectionResult } from "../../../shared/types";

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
      <div className="section-results__last-iterations"></div>
      <div className="section-results__answer">
        <div>Кількість ітерацій: {iterations}</div>
        <div>Результат: {root}</div>
      </div>
    </section>
  );
};

export default SectionResults;
