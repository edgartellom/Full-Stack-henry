const fs = require('fs');

const wc = (args, done) => { // wc filename.txt ---> args = ['filename.txt']
    fs.readFile(args[0], 'utf-8', function(err, data) {
        if (err) throw err;
        const counterLines = data.split('\n').length.toString();
        done(counterLines);
    })
}

module.exports = wc;