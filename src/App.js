import React, { useState } from "react";
import { Button } from "./Button";
import { range } from "./data";
import { Form } from "./Form";
import "./styles.css";

export default function App() {
  const [randomId, setCount] = useState(range(1000, 2000));

  return (
    <div className="App">
      <Button onClick={() => setCount(range(1000, 2000))}>
        Generate New People
      </Button>
      <Form randomId={randomId} />
    </div>
  );
}
