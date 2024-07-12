const { handleCabbage } = require('./actions')

const cabbage = (program) => {
  program
    .command('cabbage')
    .description('Love Cabbage 🥬')
    .option('-d, --diff <date>', 'Counting day\'s diff for the given date')
    .option('-t, --target <number>', 'Given number of days to calculate the <number>-day')
    .action(() => handleCabbage(program.opts()))
}

module.exports = cabbage
