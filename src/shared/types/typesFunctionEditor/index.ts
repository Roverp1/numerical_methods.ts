export type FunctionEditorHandle = {
  insert: (cmd: string) => void;
  write: (text: string) => void;
  keystroke: (key: string) => void;
};

export interface MathQuillField {
  cmd: (latexCmd: string) => void;
  focus: () => void;
  latex: () => string;
  write: (latex: string) => void;
  keystroke: (key: string) => void;
}
