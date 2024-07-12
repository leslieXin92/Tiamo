const timeFormat = (time, format = 'YYYY-MM-DD') => {
  const date = new Date(time)

  const formatParts = {
    'YYYY': date.getFullYear(),
    'MM': ('0' + (date.getMonth() + 1)).slice(-2),
    'DD': ('0' + date.getDate()).slice(-2),
    'HH': ('0' + date.getHours()).slice(-2),
    'mm': ('0' + date.getMinutes()).slice(-2),
    'ss': ('0' + date.getSeconds()).slice(-2)
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => formatParts[match])
}

const showDays = (days) => {
  if (days <= 100) return `${days} days`

  const months = Math.floor(days / 30)

  if (months >= 12) {
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    return `${years} year${years > 1 ? 's' : ''} and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
  }

  const remainingDays = days % 30
  return `${months} month${months > 1 ? 's' : ''} and ${remainingDays} day${remainingDays > 1 ? 's' : ''}`
}

module.exports = {
  timeFormat,
  showDays
}
