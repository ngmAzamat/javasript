"use strict";
let string1 = "max";
let number1 = 10;
let undef = undefined;
let city1 = null;
let unknoswn1 = null;
let boolean1 = true;
let any1 = "max";
let nev;
// обьекты
let obj = {
    str: "max",
    number: 10,
    undefine: undefined,
    city: null,
    unknown: null,
    boolean: true,
    any: "max",
};
// массивы
const nums = [1, 2, 3, 4, 5];
// кортежи
const record = [1, "max"];
// функции
function getName(name) {
    return 25;
}
getName("max");
// класы
class animal {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const CAT = new animal("cat");
// компиляция в файл js
// tsc src/objects.ts - в папке SRC у нас появился из objects.ts objects.js
// generic (обобщение)
function getar(name) {
    console.log(typeof name);
    return name;
}
getar(10);
// Enum
// нужен для того что бы
// пример :
// список самых лучших полководцев
// 1. Наполеон
// 2. Алексадр Македонский
// 3. Цезарь
// 4. Суворов
// распечатоть на каком месте Александр?
// console.log(polkovodes.alex);
// в консоли: 2
var colors;
(function (colors) {
    colors[colors["RED"] = 0] = "RED";
    colors[colors["GREEN"] = 1] = "GREEN";
    colors[colors["BLUE"] = 2] = "BLUE";
})(colors || (colors = {}));
const color = colors.BLUE;
console.log(colors.BLUE);
var names;
(function (names) {
    names[names["alex"] = 0] = "alex";
    names[names["max"] = 1] = "max";
    names[names["charles"] = 2] = "charles";
    names[names["CharleMange"] = 3] = "CharleMange";
})(names || (names = {}));
console.log(names.CharleMange);
const profiles = {};
const profiles1 = {};
// утверждения(assertions)
const someValue = "hDLUUYLELGBJLewnm45612S";
const strLength = someValue.length;
// что-то
// зачем нужны
// пример:
// interface general {
//   name: string;
//   greatestBatlle: string;
// }
// let Eugene1: general = {
//   name: "Eugene",
//   greatestBatlle: "zenta",
// };
// это не ошибка
// let Eugene2: general = {
//   name: "Eugene",
// };
// а это ошибка ибо надо заполнить все поля не только name
// let Eugene3: partial<general> = {
//   name: "Eugene",
// };
// это снова не ошибка ибо parital говороит "НЕ ОБЯЗАТЕЛЬНО ЗАПОЛНИТЬ ВСЕ ПОЛЯ"
// let Eugene4: omit<general, "greatestBatlle"> = {
//   name: "Eugene",
// };
// это снова не ошибка ибо omit говороит "НЕ ОБЯЗАТЕЛЬНО ЗАПОЛНИТЬ ..какоето поле.. у нас это greatestBatlle"
// let Eugene4: pick<general, "name"> = {
//   name: "Eugene",
// };
// это снова не ошибка ибо pick говороит "ОБЯЗАТЕЛЬНО ЗАПОЛНИТЬ ТОЛЬКО ОДНО ..какоето поле.. у нас это name"
