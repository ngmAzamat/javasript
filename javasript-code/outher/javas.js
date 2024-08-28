const fs = require('fs')
const data = fs.readFileSync('new-general.json', {encoding : 'utf8'})
let general = JSON.parse(data)
console.log(general['name'])