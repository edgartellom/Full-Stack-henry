const fs = require('fs');

const request = require('request');

module.exports = {
    pwd : function(args, done) { // pwd ---> args = ['']
        done(process.cwd());
    },
    date : function(args, done) { // date ---> args = ['']
        done(Date());
    },
    ls : function(args, done) { // ls ---> args = ['']
        var output = "";
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                output += file.toString() + "\n";
            })
            done(output);
        });
    },
    echo : function(args, done) { // echo Hello World ---> args = ['Hello World']
        done(args.join(' '));
    },
    cat : function(args, done) { // cat README.md ---> args = ['README.md']
        fs.readFile(args[0], function(err, data) {
            if (err) throw err;
            done(data);
        })

    },
    head : function(args, done) { // head README.md 10 ---> args = ['README.md', 10]
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            if (!args[1]) args[1] = 5; // Default ---> 5 firstLines
            const firstLines = data.split('\n').slice(0,args[1]).join('\n');
            done(firstLines);
        })
    },
    tail: function(args, done) { // tail README.md 10 ---> args = ['README.md', 10]
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            if (!args[1]) args[1] = 5; // Default ---> 5 lastLines
            const lastLines = data.split('\n').slice(-args[1]).join('\n');
            done(lastLines);
        })
    },
    curl : function(args, done) { // curl http:www.google.com ---> args = ['http:www.google.com']
        request(args[0], function(err, response, body) {
            if (err) throw err;
            done(body);
        })
    },
    sort : function(args, done) { // sort filename.txt ---> args = ['filename.txt']
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            const sortedFile = data.split('\n').sort().join('\n');
            done(sortedFile);
        })
    },
    wc : function(args, done) { // wc filename.txt ---> args = ['filename.txt']
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            const counterLines = data.split('\n').length.toString();
            done(counterLines);
        })
    },
    uniq : function(args, done) { // uniq filename.txt ---> args = ['filename.txt']
        fs.readFile(args[0], 'utf-8', function(err, data) {
            if (err) throw err;
            const uniqFilter =  new Set(data.split('\n'));
            const uniqLines = [...uniqFilter].join('\n');
            done(uniqLines);
        })
    },
    clear : function(args, done) {
        done(('\033c'));
    }
}