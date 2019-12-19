import React from "react";

const Box = props => {
  return (
    <div
      className={props.data === props.box ? "box box-selected" : "box"}
      onClick={() => {
        props.setData(props.box);
      }}
    >
      <label>
        <input
          type="radio"
          onChange={() => {}}
          value={props.box === props.data ? true : false}
          checked={props.box === props.data ? true : false}
        />
        {props.box}
      </label>
    </div>
  );
};

export default Box;
