import React from "react";
import Box from "../components/Box";

const Boxes = ({ boxes, project, setProject, field, setStep, next }) => {
  return (
    <>
      <div className="general-padding boxes">
        {/* mapping all boxes and print on screen */}
        {boxes.map((box, index) => {
          return (
            <Box
              key={index}
              box={box}
              setProject={setProject}
              project={project}
              field={field}
              setStep={setStep}
              next={next}
            />
          );
        })}
      </div>
    </>
  );
};

export default Boxes;
