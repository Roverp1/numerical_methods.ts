import type { InputChangeEvent } from "../../../shared/types";

import "./FormInputNewton.scss";

type Props = {
  onHandleChange: (e: InputChangeEvent) => void;
};

const FormInputNewton = ({ onHandleChange }: Props) => {
  return (
    <form className="form-input-newton">
      <fieldset>
        <legend>Wprowadź swoje dane</legend>

        <label>
          <span>dokładność:</span>
          <input onChange={onHandleChange} name="dokladnosc" type="number" step="any" />
        </label>

        <label>
          <span>Maksymalna liczba iteracji:</span>
          <input onChange={onHandleChange} name="maxIterations" type="number" />
        </label>
      </fieldset>
    </form>
  );
};

export default FormInputNewton;
