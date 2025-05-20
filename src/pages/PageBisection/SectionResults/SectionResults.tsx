import "./SectionResults.scss";

import type { BisectionResult } from "../../../shared/types";

const SectionResults = ({ result }: { result: BisectionResult | null }) => {
  if (!result) return null;

  const { success, root, iterations } = result;

  return (
    <section className="section-results">
      <div>{success}</div>
      <div>{root}</div>
      <div>{iterations}</div>
    </section>
  );
};

export default SectionResults;
