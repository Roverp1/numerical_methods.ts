import "./MathKeyboard.scss";

type Props = {
  onInsert: (cmd: string) => void;
};

const MathKeyboard: React.FC<Props> = ({ onInsert }) => {
  const buttons = [
    { label: "√", cmd: "\\sqrt" },
    { label: "x²", cmd: "^2" },
    { label: "a⁄b", cmd: "\\frac" },
    { label: "≤", cmd: "\\le" },
    { label: "≥", cmd: "\\ge" },
    { label: "≠", cmd: "\\neq" },
    { label: "α", cmd: "\\alpha" },
    { label: "π", cmd: "\\pi" },
    { label: "∫", cmd: "\\int" },
    // { label: "lim", cmd: "\\lim_{n\\to\\infty}" },
    // { label: "[Matrix]", cmd: "\\begin{bmatrix}a & b \\\\ c & d\\end{bmatrix}" },
  ];

  return (
    <div className="math-keyboard">
      {buttons.map((btn, index) => (
        <button className="math-keyboard__button" key={index} onClick={() => onInsert(btn.cmd)}>
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default MathKeyboard;
