const { timeFormat } = require('./time')
const {log} = require("./log");

const getDaysDiff = (date, start = new Date()) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    log('Target should be a date formatted as YYYY-MM-DD', 'red')
    return false
  }
  const targetDate = new Date(date)
  if (targetDate < start) {
    log('Target date cannot be earlier than start date', 'red');
    return false;
  }
  return String(Math.ceil((targetDate - start) / (1000 * 60 * 60 * 24)))
}

const getTargetDate = (target, start = new Date()) => {
  if (isNaN(target)) {
    log('Target should be a number', 'red')
    return false
  }
  if (target < 0) {
    log('Target should be bigger than zero', 'red')
    return false
  }
  const targetDate = new Date(start.getTime())
  targetDate.setDate(targetDate.getDate() + Number(target))
  return timeFormat(targetDate)
}

module.exports = {
  getDaysDiff,
  getTargetDate
}
