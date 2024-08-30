"use strict";
let string1 = "max";
let number1 = 10;
let undef = undefined;
let city1 = null;
let unknoswn1 = null;
let boolean1 = true;
let any1 = "max";
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
