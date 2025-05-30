import { useRef, useState } from "react";
import FunctionEditor from "../../../../shared/ui/textarea/FunctionEditor/FunctionEditor";
import MathKeyboard from "../../../../shared/ui/MathKeyboard/MathKeyboard";

import type { FunctionEditorHandle } from "../../../../shared/types/typesFunctionEditor";

type Props = {
  onChangeLatex: (latex: string) => void;
};

const Calculator = ({ onChangeLatex }: Props) => {
  const [latex, setLatex] = useState("");

  const editorRef = useRef<FunctionEditorHandle>(null);

  const handleInsert = (cmd: string) => {
    editorRef.current?.insert(cmd);
  };

  const handleChangeLatex = (newLatex: string) => {
    setLatex(newLatex);
    onChangeLatex(newLatex); // prokyduvannya do PageBisection
  };

  return (
    <div className="calculator">
      <FunctionEditor value={latex} onChange={handleChangeLatex} ref={editorRef} />
      <MathKeyboard onInsert={handleInsert} />
    </div>
  );
};

export default Calculator;
