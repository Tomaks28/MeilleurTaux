import React from "react";

const Title = props => {
  return (
    <>
      <div className="general-padding title">
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default Title;
