const fs = require('fs');

console.log('A');

fs.readFile('syntax/sample.txt', 'utf8', (err, res) => {
  console.log(res);
});

console.log('C');
