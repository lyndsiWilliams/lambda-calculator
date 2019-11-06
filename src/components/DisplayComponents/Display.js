import React, {useState} from "react";
import numbers from "../../data";

const Display = (props) => {
  const [num, setNum] = useState(numbers);

  return <div className="display">{num}</div>;
};

export default Display;




// Getting somewhere with this