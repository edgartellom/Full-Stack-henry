const dflt = (cmd)=>{
    process.stdout.write(`Command "${cmd}" not found!`);
    process.stdout.write('\nprompt > ');
}
module.exports = dflt;