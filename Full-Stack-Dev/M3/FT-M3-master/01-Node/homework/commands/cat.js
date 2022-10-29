const fs = require('fs');

const cat = (args, done) => { // cat README.md ---> args = ['README.md']
    fs.readFile(args[0], function(err, data) {
        if (err) throw err;
        done(data);
    })
}

module.exports = cat;