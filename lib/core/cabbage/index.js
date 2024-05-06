const { handleCabbage } = require('./actions')

const cabbage = (program) => {
  program
    .command('cabbage')
    .description('Love timer')
    .option('-d, --diff <date>', 'Counting day difference for the given date')
    .option('-t, --target <days>', 'Given number of days to calculate the date from start date')
    .action(() => handleCabbage(program.opts()))
}

module.exports = cabbage
