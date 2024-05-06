const { log } = require('../../utils/log')

const helpOptions = (program) => {
  program
    .option('-d, --diff <date>', 'Counting day difference for the given date')
    .option('-t, --target <days>', 'Given number of days to calculate the date from start date')
}

module.exports = helpOptions
