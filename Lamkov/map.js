let users = [
  {
    name: "Василий",
    age: 40,
    city: "Москва",
  },
  {
    name: "Василий",
    age: 50,
    city: "Санкт-Петербург",
  },
];

users = users.map((user) => {
  return `${user.name}, ${user.age} лет, живет в г. ${user.city}`;
});

console.log(users);
