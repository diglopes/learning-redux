import React from "react";
import Card from "./components/Card";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Exercise React-redux</h1>
      <div className="line">
        <Card title="Card 1" red>
          X
        </Card>
        <Card title="Card 1" blue>
          X
        </Card>
      </div>
      <div className="line">
        <Card title="Card 2" green>
          Y
        </Card>

        <Card title="Card 2" purple>
          Y
        </Card>
      </div>
    </div>
  );
}

export default App;
