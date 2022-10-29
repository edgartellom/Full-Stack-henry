const fs = require('fs');

const sort = (args, done) => { // sort filename.txt ---> args = ['filename.txt']
    fs.readFile(args[0], 'utf-8', function(err, data) {
        if (err) throw err;
        const sortedFile = data.split('\n').sort().join('\n');
        done(sortedFile);
    })
}

module.exports = sort;