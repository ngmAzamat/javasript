let string1: string = "max";
let number1: number = 10;
let undef: undefined = undefined;
let city1: null = null;
let unknoswn1: unknown = null;
let boolean1: boolean = true;
let any1: any = "max";
let nev: never;

// обьекты
let obj: {
  str: string;
  number: number;
  undefine: undefined;
  city: null;
  unknown: unknown;
  boolean: boolean;
  any: any;
} = {
  str: "max",
  number: 10,
  undefine: undefined,
  city: null,
  unknown: null,
  boolean: true,
  any: "max",
};

// массивы

const nums: number[] = [1, 2, 3, 4, 5];

// кортежи

const record: [number, string] = [1, "max"];

// функции

function getName(name: string): number {
  return 25;
}

getName("max");

// класы

class animal {
  name: string;
  constructor(name: string) {
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

function getar<T>(name: T): T {
  console.log(typeof name);
  return name;
}

getar(10 as number);

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

enum colors {
  RED,
  GREEN,
  BLUE,
}

const color: colors = colors.BLUE;
console.log(colors.BLUE);

enum names {
  alex,
  max,
  charles,
  CharleMange,
}

console.log(names.CharleMange);

// types(типы)

type strNum = string | number;

type Profile = {
  names: strNum;
  isDeveloper: boolean;
} & ages;

type ages = {
  ages: number;
};

const profiles: Profile = {} as Profile;

// interface(интерфейсы)

interface Profile1 extends ages1 {
  names: string;
  isDeveloper: boolean;
}

interface ages1 {
  ages: number;
}

const profiles1: Profile1 = {} as Profile1;
