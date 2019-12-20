import React from "react";

const Box = ({ box, setProject, project, field, setStep, next }) => {
  return (
    <div
      className={project[field] === box ? "box box-selected" : "box"}
      onClick={() => {
        setProject({ ...project, [field]: box });
        setStep(next);
      }}
    >
      <label>
        <input
          type="radio"
          onChange={() => {}}
          value={project[field] === box ? true : false}
          checked={project[field] === box ? true : false}
        />
        {box}
      </label>
    </div>
  );
};

export default Box;
