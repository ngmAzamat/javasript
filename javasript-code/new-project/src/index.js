const fs = require("fs-js");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  let a = document.querySelector("#name");
  const name = a.value;
  console.log(name);
  let b = document.querySelector("#password");
  const pas = b.value;
  console.log(pas);
  const ob = {
    password: pas,
    name: name,
  };
  console.log(ob["password"]);

  fs.writeFileSync("data.json", JSON.stringify(ob), {
    encoding: "utf8",
    flag: "w",
  });
});
