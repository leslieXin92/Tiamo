const { log } = require('../../utils/log')
const { getTargetDate } = require('../../utils/option')
const { showDays } = require('../../utils/time')

const handleOrange = (options) => {
  const birthday = new Date('2024-05-17')

  if (options.target) {
    const targetDate = getTargetDate(options.target, birthday)
    log(`Orange's ${options.target}-day is in ${targetDate}`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - birthday) / (1000 * 60 * 60 * 24)) - 1
  log(`Orange is ${showDays(away)} old`)
}

module.exports = {
  handleOrange
}
