const { log } = require('../../utils/log')
const { getTargetDate, getDaysDiff} = require('../../utils/option')
const { showDays } = require('../../utils/time')

const handleOrange = (options) => {
  const birthday = new Date('2024-05-17')

  if (options.diff && options.target) {
    log('Only diff or target can be provided, not both', 'red')
    return
  }

  if (options.target) {
    const targetDate = getTargetDate(options.target, birthday)
    log(`Orange's ${options.target}-day is in ${targetDate}`)
    return
  }

  if (options.diff) {
    const diff = getDaysDiff(options.diff, birthday)
    log(`${options.diff} is Orange's ${diff}-day`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24)) - 1
  log(`Orange is ${showDays(away)} old (${away} days)`)
}

module.exports = {
  handleOrange
}
