import React from "react";
import Box from "../components/Box";

const Boxes = props => {
  return (
    <>
      <div className="general-padding boxes">
        {props.boxes.map((box, index) => {
          return (
            <Box
              key={index}
              box={box}
              setData={props.setData}
              data={props.data}
              next={props.next}
            />
          );
        })}
      </div>
    </>
  );
};

export default Boxes;
