import React, { useEffect } from "react";

const Display = props => {
  const [count, setCount] = useState(0);

  useEffect;
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{count}</h3>
    </div>
  );
};

export default Display;
