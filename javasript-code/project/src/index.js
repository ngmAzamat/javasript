"use strict";
import colors from "color-name";
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const a = document.getElementById("id");
  const text = document.getElementById("text");
  const colorname = text.value;
  const colorCode = colors[colorname];

  if (!colorCode) {
    console.log(`Color not found: ${colorname}`);
  } else {
    console.log(colorCode);
    a.innerHTML = `<div>${colorname}</div>`;
    a.innerHTML = `<div>${colorCode}</div>`;
    a.style.backgroundColor = `rgb(${colorCode})`;
  }
});
