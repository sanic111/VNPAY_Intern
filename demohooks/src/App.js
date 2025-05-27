// quản lý state, truyền props


import React, { useState, useCallback } from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleAlert = useCallback(() => {
    alert("Callback from parent called!");
  }, []);

  return (
    <div>
      <h1>React Performance Demo</h1>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>

      <input
        style={{ width: "250px", marginLeft: "10px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typing here shouldn't rerender component"
      />

      <h2>Functional + Memoized Component</h2>
      <FunctionalComponent count={count} onAlert={handleAlert} />

      <h2>Class Component</h2>
      <ClassComponent count={count} />
    </div>
  );
}
