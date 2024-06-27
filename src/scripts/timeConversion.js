const timeConversion = (s) => {
  let [hours, minutes, seconds] = s.split(":");
  const timeIndicator = seconds.slice(2);
  console.log(timeIndicator)
  seconds = seconds.slice(0,2);
  if (timeIndicator === "AM" && hours === "12") {
    hours = "00"
  } else if (timeIndicator === "PM" && hours !== "12") {
    hours = String(Number(hours) + 12)
  }
  return `${hours}:${minutes}:${seconds}`
}

console.log(timeConversion("12:40:22AM"))

module.exports = timeConversion;