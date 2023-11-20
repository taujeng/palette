

const getDate = () => {
  // Output: "2023-08-29"
  const currentDate = new Date();

  const year = currentDate.getFullYear(); // Gets the current year (e.g., 2023)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Gets the current month (e.g., 08)
  const day = String(currentDate.getDate()).padStart(2, '0'); // Gets the current day of the month (e.g., 29)

  const formattedDate = `${year}-${month}-${day}`;

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

export { getDate, getFormatDate, getShortFormatDate, getWeekDay }
