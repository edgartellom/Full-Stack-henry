const fs = require('fs');

const head = (args, done) => { // head README.md 10 ---> args = ['README.md', 10]
    fs.readFile(args[0], 'utf-8', function(err, data) {
        if (err) throw err;
        const firstLines = data.split('\n').slice(0,(args[1] ? parseInt(args[1]) : 10)).join('\n'); // Default ---> 10 firstLines
        done(firstLines);
    })
}

module.exports = head;