import React from "react";
import "./App.scss";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const input = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" onChange={input} value={text}></textarea>
      <div id="preview">{text}</div>
    </div>
  );
}

export default App;
