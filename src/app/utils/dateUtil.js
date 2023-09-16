const currentDate = new Date();

export const getDate = () => {
  // const currentDate = new Date();

  const year = currentDate.getFullYear(); // Gets the current year (e.g., 2023)
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Gets the current month (e.g., 08)
  const day = String(currentDate.getDate()).padStart(2, '0'); // Gets the current day of the month (e.g., 29)

  const formattedDate = `${year}-${month}-${day}`;
  // console.log(formattedDate); // Output: "2023-08-29"

  return formattedDate;
}

export const getWeekDay = () => {
  const dayOfWeekNumber = currentDate.getDay();

  // An array of day names (0 = Sunday, 1 = Monday, etc.)
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the day name corresponding to the day of the week
  const dayOfWeekName = dayNames[dayOfWeekNumber];

  return dayOfWeekName;
}