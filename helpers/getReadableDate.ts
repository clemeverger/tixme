export default function getReadableDate(date: Date) {
  const day = date.getDate()
  const month = date.getMonth()
  const monthLetter = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'novembre', 'décembre']
  return `${day} ${monthLetter[month]}`
}
