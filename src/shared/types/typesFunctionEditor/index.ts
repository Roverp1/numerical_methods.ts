export type FunctionEditorHandle = {
  insert: (cmd: string) => void;
};

export interface MathQuillField {
  cmd: (latexCmd: string) => void;
  focus: () => void;
  latex: () => string;
  write?: (latex: string) => void;
}
