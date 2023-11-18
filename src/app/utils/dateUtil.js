

const getDate = () => {
  // Output: "2023-08-29"
  const currentDate = new Date();

  const year = currentDate.getFullYear(); // Gets the current year (e.g., 2023)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Gets the current month (e.g., 08)
  const day = String(currentDate.getDate()).padStart(2, '0'); // Gets the current day of the month (e.g., 29)

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

const getFormatDate = () => {
  // Output: "March 8"
  const currentDate = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  
  return `${month} ${day}`;
}

const getWeekDay = () => {
  const currentDate = new Date();
  const dayOfWeekNumber = currentDate.getDay();

  // An array of day names (0 = Sunday, 1 = Monday, etc.)
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the day name corresponding to the day of the week
  const dayOfWeekName = dayNames[dayOfWeekNumber];

  return dayOfWeekName;
}

export { getDate, getFormatDate, getWeekDay }
