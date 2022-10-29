const request = require('request');

const curl = (args, done) => { // curl http:www.google.com ---> args = ['http:www.google.com']
    request(args[0], function(err, response, body) {
        if (err) throw err;
        done(body);
    })
}

module.exports = curl;