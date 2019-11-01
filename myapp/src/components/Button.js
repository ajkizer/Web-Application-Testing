import React from "react";

const Button = props => {
  return (
    <div>
      <button>
        <h3>{props.name}</h3>
      </button>
    </div>
  );
};

export default Button;
