import "./FunctionEditor.scss";

type FunctionEditorProps = {
  value: string;
  onChange: (newValue: string) => void;
};

const FunctionEditor: React.FC<FunctionEditorProps> = ({ value, onChange }) => {
  return (
    <>
      <div className="function-editor">
        <span>f(x) = </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Wprowadź funkcję, np. 1 - nthRoot(x, 3)^2"
        />
      </div>
    </>
  );
};

export default FunctionEditor;
