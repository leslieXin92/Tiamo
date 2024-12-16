const { log } = require('../../utils/log')
const { getDaysDiff, getTargetDate } = require('../../utils/option')

const handleCabbage = (options) => {
  const start = new Date('2022-01-18')

  if (options.diff && options.target) {
    log('Only diff or target can be provided, not both', 'red')
    return
  }

  if (options.diff) {
    const diff = getDaysDiff(options.diff, start)
    log(`${options.diff} is Leslie and Cabbage's ${diff}-day`)
    return
  }

  if (options.target) {
    const targetDate = getTargetDate(options.target, start)
    log(`Leslie and Cabbage's ${options.target}-day is ${targetDate}`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - start) / (1000 * 60 * 60 * 24)) - 1
  log(`Leslie and Cabbage have been together for ${away} days`)
}

module.exports = {
  handleCabbage
}
