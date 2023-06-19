export const fnGetTime = (today) => {
  let year = today.getFullYear()
  let month = today.getMonth()
  let date = today.getDate()
  let hour = today.getHours()
  let min = today.getMinutes()
  let sec = today.getSeconds()

  return { year, month, date, hour, min, sec }
}