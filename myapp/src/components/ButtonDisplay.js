import React from "react";
import Button from "./Button";

const ButtonDisplay = () => {
  return (
    <div className="button-display">
      <div className="counter-buttons">
        <Button name="Foul" />
        <Button name="Strike" />
        <Button name="Ball" />
      </div>
      <div className="hit-button">
        <Button name="Hit!" className="hit-btn" />
      </div>
    </div>
  );
};

export default ButtonDisplay;
