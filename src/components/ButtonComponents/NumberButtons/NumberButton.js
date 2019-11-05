import React from "react";

const NumberButton = (props) => {
  const {num} = props;
  console.log(props);

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button>{num}</button>
      </div>
    </>
  );
};

export default NumberButton;