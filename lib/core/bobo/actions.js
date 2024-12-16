const { log } = require('../../utils/log')
const { getTargetDate, getDaysDiff} = require('../../utils/option')
const { showDays } = require('../../utils/time')

const handleBobo = (options) => {
  const birthday = new Date('2023-04-28')

  if (options.diff && options.target) {
    log('Only diff or target can be provided, not both', 'red')
    return
  }

  if (options.target) {
    const targetDate = getTargetDate(options.target, birthday)
    if (!targetDate) return
    log(`Bobo's ${options.target}-day is in ${targetDate}`)
    return
  }

  if (options.diff) {
    const diff = getDaysDiff(options.diff, birthday)
    if (!diff) return
    log(`${options.diff} is Bobo's ${diff}-day`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24)) - 1
  log(`Bobo is ${showDays(away)} old (${away} days)`)
}

module.exports = {
  handleBobo
}
