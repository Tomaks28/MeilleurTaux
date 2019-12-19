import React from "react";
import Box from "../components/Box";

const Boxes = props => {
  return (
    <>
      <div className="general-padding boxes">
        {props.boxes.map((box, index) => {
          // console.log("here ", box, props.data);
          console.log("here ", props.data);
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
