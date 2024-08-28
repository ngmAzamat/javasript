import colors from "color-name";
import { getMessage } from "./func.js";

function main() {
  const msg = getMessage();
  console.log(msg);

  const arr = colors.red;
  console.log(arr);
}

document.addEventListener("DOMContentLoaded", main);
