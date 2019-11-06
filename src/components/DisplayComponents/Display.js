import React, {useState} from "react";
import {numbers} from "../../data";

const Display = (props) => {
  const {number} = props;
  const [num] = useState(numbers);

  return <div className="display">{number}</div>;
};

export default Display;




// Getting somewhere with this props.