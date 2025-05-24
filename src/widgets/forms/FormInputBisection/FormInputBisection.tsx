import type { InputChangeEvent } from "../../../shared/types";

import "./FormInputBisection.scss";

type FormInputBisectionProps = {
  onHandleChange: (e: InputChangeEvent) => void;
};

const FormInputBisection: React.FC<FormInputBisectionProps> = ({ onHandleChange }) => {
  return (
    <form className="page-bisection__given-data">
      <fieldset>
        <legend>Wprowadź swoje dane</legend>

        <label>
          <span>x początkowy:</span>
          <input
            onChange={onHandleChange}
            name="xp"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>

        <label>
          <span>x końcowy:</span>
          <input
            onChange={onHandleChange}
            name="xk"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>

        <label>
          <span>dokładność:</span>
          <input
            onChange={onHandleChange}
            name="dokladnosc"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>

        <label>
          <span>Maksymalna liczba iteracji:</span>
          <input
            onChange={onHandleChange}
            name="maxIter"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </label>
      </fieldset>
    </form>
  );
};

export default FormInputBisection;
