const commands = require('./commands/index.js');

const done = function(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}
// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var args = data.toString().trim().split(' '); // echo hello world ---> [echo, hello, world]
    var cmd = args.shift(); // cmd = echo y args = [hello, world]

    if (commands[cmd]){
        commands[cmd](args, done);
    } else {
        process.stdout.write(`${cmd} not found`);
    }
});