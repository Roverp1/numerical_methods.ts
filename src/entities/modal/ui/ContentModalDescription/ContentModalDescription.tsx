import { useLocation } from "react-router-dom";

import dataBisection from "../../../../shared/data/dataBisection";
import dataNewton from "../../../../shared/data/dataNewton";
import dataInterpolation from "../../../../shared/data/dataInterpolation";
import dataApproximation from "../../../../shared/data/dataApproximation";

import "./ContentModalDescription.scss";

const ContentModalDescription = () => {
  const location = useLocation();

  let currentData;

  if (location.pathname === "/") {
    currentData = dataBisection;
  } else if (location.pathname === "/newton-method") {
    currentData = dataNewton;
  } else if (location.pathname === "/lagrange-interpolation") {
    currentData = dataInterpolation;
  } else if (location.pathname === "/least-squares-approximation") {
    currentData = dataApproximation;
  }
  return (
    <div className="content-modal-description">
      {currentData?.map((item, index) => (
        <div key={index}>
          {item.title && <h2>{item.title}</h2>}
          {item.explanation && <p>{item.explanation}</p>}
        </div>
      ))}
    </div>
  );
};

export default ContentModalDescription;
