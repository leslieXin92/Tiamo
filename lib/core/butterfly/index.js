const { handleButterfly } = require('./actions')

const butterfly = (program) => {
  program
    .command('butterfly')
    .description('Love Butterfly 🐶')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
    .option('-d, --diff <date>', 'Counting day\'s diff for the given date')
    .action(() => handleButterfly(program.opts()))
}

module.exports = butterfly
