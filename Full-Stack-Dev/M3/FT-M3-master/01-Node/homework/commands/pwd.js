const pwd = (args, done) => { // pwd ---> args = ['']
    done(process.cwd());
}

module.exports = pwd;