const fs = require('fs');

const uniq = (args, done) => { // uniq filename.txt ---> args = ['filename.txt']
    fs.readFile(args[0], 'utf-8', function(err, data) {
        if (err) throw err;
        const uniqFilter =  new Set(data.split('\n'));
        const uniqLines = [...uniqFilter].join('\n');
        done(uniqLines);
    })
}

module.exports = uniq;