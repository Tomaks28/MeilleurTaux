import React from "react";
import { useHistory } from "react-router-dom";

const Box = props => {
  let checked = false;
  return (
    <div
      className="box"
      onClick={() => {
        // checked = !checked;
      }}
    >
      <label>
        {/* <input type="radio" checked={checked} /> */}
        <input
          type="radio"
          onChange={() => {
            // useHistory.push("/" + props.nextPage);
          }}
          // value={props.box}
        />
        {props.box}
      </label>
    </div>
  );
};

export default Box;
