import React, { useEffect, useState } from "react";

const Display = props => {
  return (
    <div>
      <h2 data-testid="ball-value">Balls: {props.balls}</h2>
      <h2 data-testid="strike-value">Strikes: {props.strikes}</h2>
    </div>
  );
};

export default Display;
