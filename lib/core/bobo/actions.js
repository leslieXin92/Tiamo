const { log } = require('../../utils/log')
const { getTargetDate } = require('../../utils/option')
const { showDays } = require('../../utils/time')

const handleBobo = (options) => {
  const birthday = new Date('2023-04-28')

  if (options.target) {
    const targetDate = getTargetDate(options.target, birthday)
    log(`Bobo's ${options.target}-day is in ${targetDate}`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24)) - 1
  log(`Bobo is ${showDays(away)} old`)
}

module.exports = {
  handleBobo
}
