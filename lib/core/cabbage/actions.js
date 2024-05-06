const { timeFormat } = require('../../utils/time')
const { log } = require('../../utils/log')

const handleCabbage = (options) => {
  const start = new Date('2022-01-18')

  if (options.diff && options.target) {
    throw new Error('Only diff or target can be provided, not both')
  }

  if (options.diff) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(options.diff)) throw new Error('Target should be a date formatted as YYYY-MM-DD')
    const targetDate = new Date(options.diff)
    const away = Math.ceil((targetDate - start) / (1000 * 60 * 60 * 24))
    log(`The diff is ${away} days`)
    return
  }

  if (options.target) {
    if (isNaN(options.target)) throw new Error('Target should be a number')
    const targetDate = new Date(start.getTime())
    targetDate.setDate(targetDate.getDate() + Number(options.target))
    log(`From begin and after ${options.target} days, the date will be ${timeFormat(targetDate)}`)
    return
  }

  const today = new Date()
  const away = Math.ceil((today - start) / (1000 * 60 * 60 * 24)) - 1
  log(`Leslie and Cabbage have been together for ${away} days`)
}

module.exports = {
  handleCabbage
}
