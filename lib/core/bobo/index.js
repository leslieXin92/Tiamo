const { handleBobo } = require('./actions')

const bobo = (program) => {
  program
    .command('bobo')
    .description('Love Bobo 🐱')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
    .action(() => handleBobo(program.opts()))
}

module.exports = bobo
