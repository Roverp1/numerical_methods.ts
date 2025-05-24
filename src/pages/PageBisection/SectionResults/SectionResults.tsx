import { TbFaceIdError } from "react-icons/tb";

import "./SectionResults.scss";
import "./SectionResultsError.scss";

import type { BisectionResult } from "../../../shared/types";

const SectionResults = ({ result }: { result: BisectionResult | null }) => {
  if (!result) return null;

  const { success, root, iterations } = result;

  if (!success) {
    return (
      <section className="section-results-error">
        <TbFaceIdError className="icon" />
        <p>Nieprawidłowe dane do obliczenia formuły</p>
        <p>Spróbuj wprowadzić inne dane</p>
      </section>
    );
  }

  return (
    <section className="section-results">
      <div>{iterations}</div>
      <div>{root}</div>
    </section>
  );
};

export default SectionResults;
