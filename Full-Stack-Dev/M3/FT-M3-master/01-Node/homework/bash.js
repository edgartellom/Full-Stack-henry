const commands = require('./commands/index.js');
const done = require('./utils');

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var [cmd, ...args] = data.toString().trim().split(' '); // echo hello world ---> [echo, hello, world]
     // cmd = echo y args = [hello, world]

    // if (commands.hasOwnProperty(cmd)) commands[cmd]();
    // else commands.dflt(cmd);
    commands.hasOwnProperty(cmd) ? commands[cmd](args, done) : commands.dflt(cmd);
});