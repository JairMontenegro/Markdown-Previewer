import React from "react";
import "./App.scss";
import { marked } from "marked";
import { useState } from "react";
import Jair from "./img/Jair.svg";

function App() {
  const [text, setText] = useState(`# MARKDOWN PREVIEWER
  ## Welcome to my markdown
  [visit my portfolio](https://jairmontenegro.github.io/personal-portfolio-/)
  
  ---
  \`npx-create-react-app .\`

  \`\`\`let array = [10,20,40,-30,-20,50,-60];
    let absMax = array.reduce(function(max, item){
      return Math.max(Math.abs(max),Math.abs(item));
      });
  \`\`\`
---
1. Create project 
2. write the funciton 
3. Success
---
> Jair Montenegro Florez
----
**conquering  FreeCodeCamp front end libraries certification** 
![jair dev](${Jair})



`);

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
