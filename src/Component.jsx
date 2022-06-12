import React, { useState } from "react";

const Component = () => {
  const [text, setText] = useState("component");
  return (
    <div className="app">
      component
      <input
        type="text"
        value={text}
        onInput={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Component;
