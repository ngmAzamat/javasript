(() => {
  // src/index.js
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let a = document.querySelector("#name");
    const name = a.value;
    console.log(name);
    let b = document.querySelector("#password");
    const pas = b.value;
    console.log(pas);
    const tr = {
      password: pas,
      name
    };
  });
})();
