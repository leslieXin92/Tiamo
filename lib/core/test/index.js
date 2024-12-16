const { handleTest } = require('./actions')

const test = (program) => {
    program
        .command('test')
        .action(() => handleTest(program.opts()))
}

module.exports = test
