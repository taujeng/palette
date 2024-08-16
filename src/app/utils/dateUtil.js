

const getDate = () => {
  // Output: "2023-08-29"
  const currentDate = new Date();

  const year = currentDate.getFullYear(); // Gets the current year (e.g., 2023)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Gets the current month (e.g., 08)
  const day = String(currentDate.getDate()).padStart(2, '0'); // Gets the current day of the month (e.g., 29)

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const getDateObject = (date) => {
  // Input: 2023-08-29
  // Output: a date object of that day

  //  Doing this has potential cons:
  // const date = new Date("2024-08-01");
  // per Claude: This constructor interprets the string as a date in UTC (Coordinated Universal Time). However, when you log or use this date, it's typically converted to your local time zone.

  const [year, month, day] = date.split("-");
  const formattedDate = new Date(year, month - 1, day); // month is 0-indexed in JavaScript Date

  return formattedDate;
}

const getFormatDate = (date) => {
  // Takes a date object, and formats it like: "2023-08-29"
  const year = date.getFullYear(); // Gets the current year (e.g., 2023)
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Gets the current month (e.g., 08)
  const day = String(date.getDate()).padStart(2, '0'); // Gets the current day of the month (e.g., 29)

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const getShortFormatDate = (date) => {
  // Input: Date Object. Output: "March 8"
  const monthNames = [
    "Jan.", "Feb.", "March", "April", "May", "June",
    "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  
  return `${month} ${day}`;
}

const getWeekDay = (date) => {
  // Input: Date Object. Output: "Sunday"

  const dayOfWeekNumber = date.getDay();

  // An array of day names (0 = Sunday, 1 = Monday, etc.)
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the day name corresponding to the day of the week
  const dayOfWeekName = dayNames[dayOfWeekNumber];

  return dayOfWeekName;
}

const getMonthDays = (cMonth) => {
  // return a number (# of days in the month)
  const currentDate = new Date();
  // const cMonth = currentDate.getMonth();
  const cYear = currentDate.getFullYear();

  // Months start from 0, so December is 11.
  // First param is year, 2nd is month, 3rd is day (which starts at 1)
  // so by going to the next month and putting 0 for day, we get the # of days in the month

  return new Date(cYear, cMonth + 1, 0).getDate()
}

const getMonthStart = (month) => {
  //take in a month, and return the weekday (in index)

  return new Date(2023, month, 1).getDay();
}

export { getDate, getDateObject, getFormatDate, getShortFormatDate, getWeekDay, getMonthDays }
