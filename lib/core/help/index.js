const { log } = require('../../utils/log')

const helpOptions = (program) => {
  program
    .option('-d, --diff <date>', 'Counting day\'s diff for the given date')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
}

module.exports = helpOptions
