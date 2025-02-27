class Student {
  planet = "Земля";
  country = "Россия";
  // мы указали country и planet со значениями Россия и Земля, Эти свойства будут и у весх экземпляров Классов
  // в том числе и у firstStudent и secondStudent
  constructor(name, age) {
    this.name = name;
    this.age = age;
    // фактически здесь мы тоже с помощью this сделали name и age как и planet и country
    // только зедесь значения бирутся при Обьявлении Экзепляра
  }
}

const firstStudent = new Student("Вася", 25);
const secondStudent = new Student("Петя", 18);

console.log("firstStudent: ", firstStudent);
console.log("secondStudent: ", secondStudent);
// constructor выполняется автомомтически при создании экземпляра класса
