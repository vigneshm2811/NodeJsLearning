const fs = require('node:fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'sample.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 