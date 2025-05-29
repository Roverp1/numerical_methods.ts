import { useRef, useState } from "react";
import FunctionEditor from "../../../../shared/ui/textarea/FunctionEditor/FunctionEditor";
import MathKeyboard from "../../../../shared/ui/MathKeyboard/MathKeyboard";
import { evaluate } from "mathjs";

import { convertLatexToExpression } from "../../../../shared/lib/latex/convertLatexToExpression";

import type { FunctionEditorHandle } from "../../../../shared/types/typesFunctionEditor";

const Calculator = () => {
  const [latex, setLatex] = useState("\\sqrt[3]{x}");
  const [xValue, setXValue] = useState(2);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const editorRef = useRef<FunctionEditorHandle>(null);

  const handleInsert = (cmd: string) => {
    editorRef.current?.insert(cmd);
  };

  const handleCalculate = () => {
    try {
      const expression = convertLatexToExpression(latex);
      const evaluated = evaluate(expression, { x: xValue });
      setResult(evaluated);
      setError(null);
    } catch (err) {
      setResult(null);
      setError("Błąd w formule");
    }
  };

  return (
    <div className="calculator">
      <h2>Kalkulator f(x)</h2>

      <FunctionEditor value={latex} onChange={setLatex} ref={editorRef} />
      <MathKeyboard onInsert={handleInsert} />

      <div style={{ marginTop: "1rem" }}>
        <label>
          x ={" "}
          <input type="number" value={xValue} onChange={(e) => setXValue(Number(e.target.value))} />
        </label>
      </div>

      <button onClick={handleCalculate} style={{ marginTop: "1rem" }}>
        Oblicz
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>Wynik: {result}</p>}
    </div>
  );
};

export default Calculator;
