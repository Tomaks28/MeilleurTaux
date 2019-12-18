import React from "react";
import { useHistory } from "react-router-dom";

const Box = props => {
  const history = useHistory();

  return (
    <div
      className={props.data === props.box ? "box box-selected" : "box"}
      onClick={() => {
        // history.push(props.next);
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
