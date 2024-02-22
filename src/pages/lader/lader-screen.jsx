import { useState } from "react";
import "./lader-style.css";

const yearsArray = [
  { shortYear: 47, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 48, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 49, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 50, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 51, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 52, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 53, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 54, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 55, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 56, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 57, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 58, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 59, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 60, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 61, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 61, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 62, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 63, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 64, removableSpan: <span className="vartical-row"></span> },
  { shortYear: 65, removableSpan: <span className="vartical-row"></span> },
];

const LadderScreen = () => {
  const [increaseYear, setIncreaseYear] = useState(1947);
  const [increaseValue, setIncreaseValue] = useState(0);

  const [removedIndices, setRemovedIndices] = useState([]);

  const onClickForIncrease = () => {
    setRemovedIndices((prevIndices) => [...prevIndices, increaseValue]);
    setIncreaseValue((prevValue) => prevValue + 1);
    setIncreaseYear((prevYear) => prevYear + 1);
  };

  return (
    <div className="ladder-container">
      {/* <button className="increase-btn" onClick={onClickForIncrease}>
        Increase Year
      </button> */}
      <div className="ladder-steps-container">
        {yearsArray.map((eachOne, index) => {
          const isCurrentRow = increaseValue === index;
          const isRemovedRow = removedIndices.includes(index);

          return (
            <div
              key={index}
              className={`top-vertical-row-year-container ${
                index === 0 ? "first-row" : ""
              } ${isCurrentRow ? "bold-line" : ""}`}
            >
              <span
                className={`first-number ${
                  index === 0 || isCurrentRow ? "year-text-bold" : ""
                }`}
              >
                {isCurrentRow ? increaseYear : eachOne.shortYear}
              </span>
              {isRemovedRow ? null : eachOne.removableSpan}
            </div>
          );
        })}
      </div>
      <div className="horizantal-row-container"></div>
    </div>
  );
};

export default LadderScreen;
