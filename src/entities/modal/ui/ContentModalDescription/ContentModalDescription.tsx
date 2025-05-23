import { useLocation } from "react-router-dom";

import dataBisection from "../../../../shared/data/dataBisection";
import dataInterpolation from "../../../../shared/data/dataInterpolation";

import "./ContentModalDescription.scss";

const ContentModalDescription = () => {
  const location = useLocation();

  let currentData;

  if (location.pathname === "/") {
    currentData = dataBisection;
  } else if (location.pathname === "/interpolation") {
    currentData = dataInterpolation;
  }

  return (
    <div>
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
