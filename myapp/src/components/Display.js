import React from "react";

const Display = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <h3>{props.count}</h3>
    </div>
  );
};

export default Display;
