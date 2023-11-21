import React from "react";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <ColorList />
      <ColorList2 />
    </div>
  );
}

function ColorList2() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "deepskyblue",
    "crimson",
    "indigo",
    "olive",
    "peru",
    "plum",
    "violet"
  ];

  const colorElements = colors.map((color) => {
    return <li key = {color} style={{ color: color }}>{color}</li>;
  });
  return (
    <div>
      <h1>Top {colors.length} CSS Colors (ColorList2) </h1>
      <ol>
        {/* display the array of <li> elements here! */}
        {colorElements}
      </ol>
    </div>
  );
}

export default App;
