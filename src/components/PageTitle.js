import React from "react";

const Title = props => {
  return (
    <>
      <div className="general-padding">
        <h1 className="title">
          {props.title}
          {props.info ? <i className="infos"></i> : null}
        </h1>
      </div>
    </>
  );
};

export default Title;
