import "./PointsInput.scss";

type PointsInputProps = {
  pointsInput: string;
  setPointsInput: React.Dispatch<React.SetStateAction<string>>;
};

const PointsInput = ({ pointsInput, setPointsInput }: PointsInputProps) => {
  return (
    <input
      className="points-input"
      type="text"
      value={pointsInput}
      onChange={(e) => setPointsInput(e.target.value)}
      placeholder="Input points, eg: [1, 5], [2, 3], [3, 6]"
    />
  );
};

export default PointsInput;
