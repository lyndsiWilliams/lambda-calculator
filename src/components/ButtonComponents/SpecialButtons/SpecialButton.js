import React from "react";

const SpecialButton = (props) => {
  const {spec} = props;
  console.log(spec);

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button className="specBtn">{spec}</button>
      </div>
    </>
  );
};

export default SpecialButton;