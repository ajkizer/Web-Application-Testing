import React from "react";
import Display from "./Display";
import { useState } from "react";
import ButtonDisplay from "./ButtonDisplay";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="dashboard">
      <h1>React Baseball!</h1>
      <Display count={count} name="Strikes" />
      <Display count={count} name="Balls" />
      <ButtonDisplay />
    </div>
  );
};

export default Dashboard;
