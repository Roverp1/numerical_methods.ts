import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { MathfieldElement } from "mathlive";

import "./FunctionEditor.scss";

type FunctionEditorProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export type FunctionEditorHandle = { insertSymbol: (latex: string) => void };

const FunctionEditor = forwardRef<FunctionEditorHandle, FunctionEditorProps>(
  ({ value, onChange }, ref) => {
    const mathfieldRef = useRef<MathfieldElement | null>(null);

    useImperativeHandle(ref, () => ({
      insertSymbol: (latex: string) => {
        mathfieldRef.current?.insert(latex);

        const newValue = mathfieldRef.current?.getValue();

        if (newValue !== undefined) {
          onChange(newValue);
        }
      },
    }));

    useEffect(() => {
      import("mathlive").then(() => {
        import("mathlive").then(() => {
          if (!mathfieldRef.current) {
            type MathFieldWithOptions = MathfieldElement & {
              options: {
                virtualKeyboardMode: string;
                virtualKeyboardTheme: string;
                smartMode: boolean;
              };
            };

            const mf = document.createElement("math-field") as MathFieldWithOptions;

            mf.options = {
              virtualKeyboardMode: "manual",
              virtualKeyboardTheme: "material",
              smartMode: true,
            };

            mf.addEventListener("input", () => {
              const newVal = mf.getValue?.();
              if (newVal !== undefined) {
                onChange(newVal);
              }
            });

            mf.setValue?.(value);
            document.getElementById("mathfield-container")?.appendChild(mf);
            mathfieldRef.current = mf;

            // Показати клаву
            mf.executeCommand("showVirtualKeyboard");

            // Через 50мс перенести її DOM-елемент
            setTimeout(() => {
              const vk = document.querySelector("div.keyboard-layer") as HTMLElement; // або .ML__keyboard
              const target = document.getElementById("keyboard-slot");

              if (vk && target) {
                target.appendChild(vk);
                vk.style.position = "static"; // щоб не було fixed
                vk.style.marginTop = "12px";
                vk.style.width = "100%";
              }
            }, 50);
          }
        });
      });
    }, [onChange, value]);

    return (
      <>
        <div className="function-editor">
          <span>f(x) = </span>
          <div>
            <div id="mathfield-container" className="mathfield-wrapper" />
            <div id="keyboard-slot" />
          </div>
        </div>
      </>
    );
  }
);

export default FunctionEditor;
