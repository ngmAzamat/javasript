
const fs = require('fs');
const tr = {
    "name": "eugene",
    "age": 29,
    "rank": "Filed-Marshal",
    "greatest battle": ["Turin", "Zenta"],
    "is victory in 10 battle": true,
}
fs.writeFileSync('new-general.json', JSON.stringify(tr), {encoding: 'utf8', flag: 'w'});