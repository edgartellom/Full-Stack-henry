const echo = (args, done) => { // echo Hello World ---> args = ['Hello World']
    done(args.join(' '));
}

module.exports = echo;