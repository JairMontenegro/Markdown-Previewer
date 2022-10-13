import React from "react";
import "./App.scss";
import { marked } from "marked";
import { useState } from "react";

function App() {
  const [text, setText] = useState(" # MARKDOWN PREVIEWER ");

  const input = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" onChange={input} value={text}></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
