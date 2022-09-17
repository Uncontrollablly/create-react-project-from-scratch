import { useState } from "react";
import styles from "./App.module.css";
import Component from "./Component";

const App = () => {
  const [text, setText] = useState("app");

  return (
    <div className={styles.app}>
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
