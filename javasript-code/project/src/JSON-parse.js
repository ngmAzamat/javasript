const general = {
  name: "eugene",
  age: 29,
  rank: "Filed-Marshal",
  greatest_battle: ["turino", "zenta"],
};
const eugene_of_savoy = JSON.stringify(general);
const Eugene = JSON.parse(eugene_of_savoy);
console.log(Eugene);
