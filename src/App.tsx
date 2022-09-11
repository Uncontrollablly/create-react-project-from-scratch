import React, { useState } from "react";
import "./App.css";
import Component from "./Component";

const App = () => {
  const [text, setText] = useState("app");

  return (
    <div className="app">
      hello world
      <input
        type="text"
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
      />
      <Component />
    </div>
  );
};

export default App;
