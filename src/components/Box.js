import React from "react";

const Box = props => {
  // console.log("log : ", props.box, props.data);
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
          onChange={() => {
            // useHistory.push("/" + props.nextPage);
          }}
          value={props.box === props.data ? true : false}
          // ckecked={props.box === props.data ? true : false}
        />
        {props.box}
      </label>
    </div>
  );
};

export default Box;
