import React from "react";
import Average from "./components/Average";
import Sum from "./components/Sum";
import Random from "./components/Random";
import Interval from './components/Interval'
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Exercise React-redux</h1>
      <div className="line">
        <Interval />
      </div>
      <div className="line">
        <Average />
        <Sum />
        <Random />
      </div>
    </div>
  );
}

export default App;
