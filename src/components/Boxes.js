import React from "react";
import Box from "../components/Box";

const Boxes = props => {
  return (
    <>
      <div className="general-padding boxes">
        {props.boxes.map((box, index) => {
          return <Box key={index} box={box} />;
        })}
      </div>
    </>
  );
};

export default Boxes;
