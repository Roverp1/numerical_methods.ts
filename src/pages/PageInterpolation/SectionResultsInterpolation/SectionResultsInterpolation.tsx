import interpolation from "../../../shared/lib/interpolation";

import type { InterpolationUserInput } from "../../../shared/types/types-interpolations";

import "./SectionResultsInterpolation.scss";

type Props = {
  userInput: InterpolationUserInput;
};

const SectionResultsInterpolation = ({ userInput }: Props) => {
  const result = interpolation(userInput);

  return (
    <section className="section-results-interpolation">
      <div>{result.fx}</div>
    </section>
  );
};

export default SectionResultsInterpolation;
