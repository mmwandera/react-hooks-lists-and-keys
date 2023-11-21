import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "deepskyblue",
    "crimson"
  ];

  return (
    <div>
      <h1>Top {colors.length} CSS Colors (ColorList1)</h1>
      <ol>
        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
        <li style={{ color: colors[5] }}>{colors[5]}</li>
        <li style={{ color: colors[6] }}>{colors[6]}</li>
      </ol>
    </div>
  );
}

export default ColorList;
