import interpolation from "../../../shared/lib/interpolation";

import "./SectionResultsInterpolation.scss";

const SectionResultsInterpolation = () => {
  const result = interpolation();

  return (
    <section className="section-results-interpolation">
      <div>{result.fx}</div>
    </section>
  );
};

export default SectionResultsInterpolation;
