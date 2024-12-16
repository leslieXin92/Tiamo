const { handleBobo } = require('./actions')

const bobo = (program) => {
  program
    .command('bobo')
    .description('Love Bobo 🐱')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
    .option('-d, --diff <date>', 'Counting day\'s diff for the given date')
    .action(() => handleBobo(program.opts()))
}

module.exports = bobo
