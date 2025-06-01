import { useRef, forwardRef, useImperativeHandle } from "react";
import { EditableMathField, addStyles } from "react-mathquill";

import type { MathQuillField } from "../../../types/typesFunctionEditor";
import type { FunctionEditorHandle } from "../../../types/typesFunctionEditor";

import "./FunctionEditor.scss";

addStyles();

type FunctionEditorProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const FunctionEditor = forwardRef<FunctionEditorHandle, FunctionEditorProps>(
  ({ value, onChange }, ref) => {
    const mathFieldRef = useRef<MathQuillField | null>(null);

    useImperativeHandle(ref, () => ({
      insert: (cmd: string) => {
        if (mathFieldRef.current) {
          mathFieldRef.current.cmd(cmd);
          mathFieldRef.current.focus();
        }
      },
      write: (text: string) => {
        if (mathFieldRef.current) {
          mathFieldRef.current.write(text);
          mathFieldRef.current.focus();
        }
      },
      keystroke: (key: string) => {
        if (mathFieldRef.current) {
          mathFieldRef.current.keystroke(key);
          mathFieldRef.current.focus();
        }
      },
      cmd: (cmd: string) => {
        if (mathFieldRef.current) {
          mathFieldRef.current.cmd(cmd);
          mathFieldRef.current.focus();
        }
      },
    }));

    return (
      <div className="function-editor">
        <span>f(x) = </span>
        <EditableMathField
          latex={value}
          onChange={(mathField) => onChange(mathField.latex())}
          mathquillDidMount={(mf) => {
            mathFieldRef.current = mf;
          }}
        />
      </div>
    );
  }
);

export default FunctionEditor;
