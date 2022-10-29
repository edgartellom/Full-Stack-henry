const fs = require('fs');

const ls = (args, done) => { // ls ---> args = ['']
    var output = "";
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            output += file.toString() + "\n";
        })
        done(output);
    });
}

module.exports = ls;