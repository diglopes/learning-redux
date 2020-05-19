import React from "react";
import Card from "./components/Card";
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
        <Card title="Card 2" blue>X</Card>
        <Card title="Card 3" green>Y</Card>
        <Card title="Card 4" purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
