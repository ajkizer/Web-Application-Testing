import React from "react";
import Button from "./Button";

const ButtonDisplay = () => {
  return (
    <div className="button-display">
      <Button name="Foul" />
      <Button name="Strike" />
      <Button name="Ball" />
    </div>
  );
};

export default ButtonDisplay;
