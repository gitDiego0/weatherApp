export const getToday = () => {
  const today = new Date()
  const formatter = new Intl.DateTimeFormat('es', { month: 'long' })
  const month = formatter.format(today)

  const day = String(today.getDate()).padStart(2, '0')
  const year = today.getFullYear()
  return `${day} ${month} ${year}  `
}
