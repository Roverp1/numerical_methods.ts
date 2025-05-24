import "./FunctionEditor.scss";

type FunctionEditorProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const FunctionEditor: React.FC<FunctionEditorProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Wprowadź funkcję, np. x^2 - 4"></textarea>
  );
};

export default FunctionEditor;
