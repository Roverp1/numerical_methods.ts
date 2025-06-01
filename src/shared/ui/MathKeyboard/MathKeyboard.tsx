import "./MathKeyboard.scss";

type Props = {
  onInsert: (cmd: string) => void;
};

const MathKeyboard: React.FC<Props> = ({ onInsert }) => {
  const buttonsScientificPanel = [
    { label: "√", cmd: "\\sqrt" },
    { label: "x²", cmd: "^2" },
    { label: "a⁄b", cmd: "\\frac" },
    { label: "π", cmd: "\\pi" },
    { label: "∫", cmd: "\\int" },
  ];

  const buttonsNumericKeypad = [
    { label: "7", cmd: "7" },
    { label: "8", cmd: "8" },
    { label: "9", cmd: "9" },
    { label: "/", cmd: "/" },
    { label: "4", cmd: "4" },
    { label: "5", cmd: "5" },
    { label: "6", cmd: "6" },
    { label: "x", cmd: "*" },
    { label: "1", cmd: "1" },
    { label: "2", cmd: "2" },
    { label: "3", cmd: "3" },
    { label: "-", cmd: "-" },
    { label: "0", cmd: "0" },
    { label: ".", cmd: "." },
    { label: "anc", cmd: "anc" },
    { label: "+", cmd: "+" },
  ];

  return (
    <div className="math-keyboard">
      <div className="math-keyboard__scientific-panel">
        {buttonsScientificPanel.map((btn, index) => (
          <button className="button" key={index} onClick={() => onInsert(btn.cmd)}>
            {btn.label}
          </button>
        ))}
      </div>
      <div className="math-keyboard__numeric-keypad">
        {buttonsNumericKeypad.map((btn, index) => (
          <button className="button" key={index} onClick={() => onInsert(btn.cmd)}>
            {btn.label}
          </button>
        ))}
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
