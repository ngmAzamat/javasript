'use strict'
let message
const f = require('fs');


const UserAnswer = prompt(message = 'введите имя')
const UserAge = prompt(message = 'введите возраст')

const tr = {
    "name": UserAnswer,
    "age": UserAge
}
f.writeFileSync('User.json', JSON.stringify(tr), {encoding: 'utf8', flag: 'w'});

