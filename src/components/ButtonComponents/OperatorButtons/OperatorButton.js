import React from "react";

const OperatorButton = (props) => {
  const {op} = props;
  console.log(op);

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button className="opBtn">{op}</button>
      </div>
    </>
  );
};

export default OperatorButton;