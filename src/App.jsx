import React from "react";
import Card from "./components/Card";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Exercise React-redux</h1>
      <div className="line">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
