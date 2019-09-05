import React from "react";
import Display from "./Display";
import { useState } from "react";
import ButtonDisplay from "./ButtonDisplay";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>React Baseball!</h1>
      <Display name="Strikes" limit="2" />
      <Display name="Balls" limit="3" />
      <ButtonDisplay />
    </div>
  );
};

export default Dashboard;
