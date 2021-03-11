let path = require('path');

console.log(path.basename(__dirname));
console.log(path.dirname(__dirname));
console.log(path.extname(__dirname));
console.log(path.parse(process.env.PATH));
//console.log(process.env.PATH);