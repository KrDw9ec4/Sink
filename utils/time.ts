import { type DateValue } from '@internationalized/date'

export function getTimeZone() {
  if (typeof Intl === 'undefined') {
    return 'Etc/UTC'
  }
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}

export function getLocale() {
  if (typeof Intl === 'undefined') {
    return navigator.language
  }

  return Intl.DateTimeFormat().resolvedOptions().locale
}

export const shortDate = (unix = 0) => {
  const shortDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: 'short',
  })
  return shortDate.format(unix * 1000)
}

export const longDate = (unix = 0) => {
  return new Date(unix * 1000).toLocaleString()
}

export function date2unix(dateValue: DateValue, type: string) {
  if (type === 'start') {
    return Math.floor(dateValue.toDate(getTimeZone()).setHours(0, 0, 0) / 1000)
  }
  if (type === 'end') {
    return Math.floor(dateValue.toDate(getTimeZone()).setHours(23, 59, 59) / 1000)
  }
  return Math.floor(dateValue.toDate(getTimeZone()).getTime() / 1000)
}
