import React from "react";

const ProgressBar = ({ percentage }) => {
  const barLength = 500;
  return (
    <div className="progress-bar">
      <div className="full-bar"></div>
      {/* Passing directly the percentage in style props */}
      <div className="progression" style={{ width: `${percentage}%` }}></div>
      {/* I calculate the left shift and remove half size of the circle */}
      <div
        className="progression-step"
        style={{ left: (barLength * percentage) / 100 - 25 }}
        // style={{ left: (calc(100%) * percentage) / 100 - 25 }}
      >
        {percentage} %
      </div>
    </div>
  );
};

export default ProgressBar;
