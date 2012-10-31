var fs = require('fs');
console.log(fs.readFileSync(__filename, 'utf8'));
fs.readFile(__filename, 'utf8', function(err, data) {
    console.log('async readFile:\n');
    console.log(data);
});