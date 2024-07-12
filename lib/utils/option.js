const { timeFormat } = require('./time')

const getDaysDiff = (date, start = new Date()) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('Target should be a date formatted as YYYY-MM-DD')
  const targetDate = new Date(date)
  return Math.ceil((targetDate - start) / (1000 * 60 * 60 * 24))
}

const getTargetDate = (target, start = new Date()) => {
  if (isNaN(target)) throw new Error('Target should be a number')
  const targetDate = new Date(start.getTime())
  targetDate.setDate(targetDate.getDate() + Number(target))
  return timeFormat(targetDate)
}

const getDaysAway = () => {

}

module.exports = {
  getDaysDiff,
  getTargetDate
}
