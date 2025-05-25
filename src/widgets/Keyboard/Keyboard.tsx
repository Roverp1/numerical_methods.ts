type KeyboardProps = {
  onInsert: (latex: string) => void;
};

const Keyboard = ({ onInsert }: KeyboardProps) => {
  return (
    <div className="keyboard">
      <button onClick={() => onInsert("x^2")}>x²</button>
      <button onClick={() => onInsert("\\sqrt{}")}>√</button>
      <button onClick={() => onInsert("\\frac{}{}")}>a⁄b</button>
      <button onClick={() => onInsert("\\left|\\right|")}>|x|</button>
      <button onClick={() => onInsert("\\pi")}>π</button>
      <button onClick={() => onInsert("+")}>+</button>
      <button onClick={() => onInsert("-")}>−</button>
      <button onClick={() => onInsert("*")}>×</button>
      <button onClick={() => onInsert("/")}>÷</button>
    </div>
  );
};

export default Keyboard;
