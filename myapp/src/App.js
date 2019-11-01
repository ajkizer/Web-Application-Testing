import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [score, setScore] = useState(0);

  const hitHandler = e => {
    e.preventDefault();
    setStrikes(0);
    setBalls(0);
  };

  const ballsHandler = e => {
    e.preventDefault();
    if (balls < 3) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
      setStrikes(0);
    }
  };

  const foulHandler = e => {
    e.preventDefault();
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };

  const strikesHandler = e => {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };

  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} score={score} />
      <Dashboard
        hitHandler={hitHandler}
        ballsHandler={ballsHandler}
        strikesHandler={strikesHandler}
        foulHandler={foulHandler}
      />
    </div>
  );
}

export default App;
