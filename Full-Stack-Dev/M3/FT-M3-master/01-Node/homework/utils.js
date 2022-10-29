const done = function(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}

module.exports = done;