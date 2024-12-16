const { handleOrange } = require('./actions')

const orange = (program) => {
  program
    .command('orange')
    .description('Love Orange 🐱')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
    .option('-d, --diff <date>', 'Counting day\'s diff for the given date')
    .action(() => handleOrange(program.opts()))
}

module.exports = orange
