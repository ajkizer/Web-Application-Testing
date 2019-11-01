import React from "react";

const Dashboard = props => {
  return (
    <div className="dashboard">
      <h1>React Baseball!</h1>
      <button data-testid="ball-btn" onClick={props.ballsHandler}>
        Ball
      </button>
      <button data-testid="hit-btn" onClick={props.hitHandler}>
        Hit
      </button>
      <button data-testid="strike-btn" onClick={props.strikesHandler}>
        Strike
      </button>
      <button data-testid="foul-btn" onClick={props.foulHandler}>
        Foul
      </button>
    </div>
  );
};

export default Dashboard;
