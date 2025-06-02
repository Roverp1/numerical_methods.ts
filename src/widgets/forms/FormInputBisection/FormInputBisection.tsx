import type { InputChangeEvent } from "../../../shared/types";

import "./FormInputBisection.scss";

type Props = {
  onHandleChange: (e: InputChangeEvent) => void;
};

const FormInputBisection = ({ onHandleChange }: Props) => {
  return (
    <form className="form-input-bisection">
      <fieldset>
        <legend>Wprowadź swoje dane</legend>

        <label>
          <span>x początkowy:</span>
          <input onChange={onHandleChange} name="xp" type="number" />
        </label>

        <label>
          <span>x końcowy:</span>
          <input onChange={onHandleChange} name="xk" type="number" />
        </label>

        <label>
          <span>dokładność:</span>
          <input onChange={onHandleChange} name="dokladnosc" type="number" step="any" />
        </label>

        <label>
          <span>Maksymalna liczba iteracji:</span>
          <input onChange={onHandleChange} name="maxIter" type="number" />
        </label>
      </fieldset>
    </form>
  );
};

export default FormInputBisection;
