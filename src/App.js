import React from "react";
import "./App.scss";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <textarea id="editor"></textarea>
      <div id="preview"></div>
    </div>
  );
}

export default App;
