const { timeFormat } = require('../../utils/time')
const { log } = require('../../utils/log')
const { getDaysDiff, getTargetDate } = require('../../utils/option')

const handleButterfly = (options) => {
  const birthday = new Date('2024-04-28')

  if (options.target) {
    const targetDate = getTargetDate(options.target, birthday)
    log(`Butterfly's ${options.target}-day is in ${targetDate}`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24)) - 1
  log(`Butterfly is ${away} days old`)
}

module.exports = {
  handleButterfly
}
