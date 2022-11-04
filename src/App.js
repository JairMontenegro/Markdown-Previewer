import React from "react";
import "./App.scss";
import { marked } from "marked";
import { useState } from "react";
import Jair from "./img/Jair.svg";
import Footer from "./footer";
import { BsPencil } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";

function App() {
  const [text, setText] = useState(`# MARKDOWN PREVIEWER
  ## Welcome to my markdown

  ### how to write in markdown? click below.
  [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
--- 
  ![jair dev](${Jair})
  [My portfolio](https://jairmontenegro.github.io/personal-portfolio-/)
  
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

**Developed by Jair Montenegro** 
![jair dev](${Jair})
`);
  marked.setOptions({
    breaks: true,
  });

  const input = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="App">
        <textarea id="editor" onChange={input} value={text}></textarea>
        <div className="wrapper">
          <div className="layout">
            <p>
              <span className="note">
                <BiSpreadsheet size={20} />
              </span>
              README.md
              <span className="pencil">
                <BsPencil />
              </span>
            </p>
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
