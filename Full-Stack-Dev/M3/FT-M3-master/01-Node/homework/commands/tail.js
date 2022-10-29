const fs = require('fs');

const tail = (args, done) => { // tail README.md 10 ---> args = ['README.md', 10]
    fs.readFile(args[0], 'utf-8', function(err, data) {
        if (err) throw err;
        const lastLines = data.split('\n').slice(args[1] ? parseInt(-args[1]) : -10).join('\n'); // Default ---> 10 lastLines
        done(lastLines);
    })
}

module.exports = tail;