const { handleButterfly } = require('./actions')

const butterfly = (program) => {
  program
    .command('butterfly')
    .description('Love butterfly 🦋')
    .option('-t, --target <number>', 'Given number of days to calculate the date')
    .action(() => handleButterfly(program.opts()))
}

module.exports = butterfly