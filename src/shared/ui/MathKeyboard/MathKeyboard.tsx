import "./MathKeyboard.scss";

type Props = {
  onInsert: (cmd: string) => void;
};

const MathKeyboard: React.FC<Props> = ({ onInsert }) => {
  const buttons = [
    { label: "√", cmd: "\\sqrt" },
    { label: "x²", cmd: "^2" },
    { label: "a⁄b", cmd: "\\frac" },
    { label: "π", cmd: "\\pi" },
    { label: "∫", cmd: "\\int" },
  ];

  return (
    <div className="math-keyboard">
      <div className="math-keyboard__scientific-panel">
        {buttons.map((btn, index) => (
          <button className="button" key={index} onClick={() => onInsert(btn.cmd)}>
            {btn.label}
          </button>
        ))}
      </div>
      <div className="math-keyboard__numeric-keypad">
        <button className="button">7</button>
        <button className="button">8</button>
        <button className="button">9</button>
        <button className="button">/</button>
        <button className="button">4</button>
        <button className="button">5</button>
        <button className="button">6</button>
        <button className="button">x</button>
        <button className="button">1</button>
        <button className="button">2</button>
        <button className="button">3</button>
        <button className="button">-</button>
        <button className="button">0</button>
        <button className="button">.</button>
        <button className="button">ans</button>
        <button className="button">+</button>
      </div>
      <div className="math-keyboard__control-panel">
        <button className="button">{"-->"}</button>
        <button className="button">{"-->"}</button>
        <button className="button">delete</button>
      </div>
    </div>
  );
};

export default MathKeyboard;
