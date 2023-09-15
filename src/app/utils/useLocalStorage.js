'use client'
// Local Storage Functions

// Initialize local storage with default data if it's empty
// export const initializeLocalStorage = () => {
//   const data = localStorage.getItem('myPalette');
//   console.log("initialized local storage")
//   if (!data) {
//     const initialData = [
//       {name: "fasdfadsf", category: "#03c04a", selected: true, reaction: "dislike"},
//               {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
//               {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
//               {name: "Games", category: "blue", selected: false, reaction: "none"},
//               {name: "Family", category: "blue", selected: false, reaction: "none"},
//               {name: "kalbmasdf", category: "red", selected: false, reaction: "none"},
//     ];
//     localStorage.setItem('myPalette', JSON.stringify(initialData));
  
//   };
// }
export const initializeLocalStorage = () => {
  const getLocalData = localStorage.getItem('myPalette');
  const startingData = getLocalData ? JSON.parse(getLocalData) : null;

  if (startingData === null) {
    // Initialize with default data
    const initialData = {
      [date]: {
        entries: [
          // Your default entries here
          {name: "Health", category: "#03c04a", selected: true, reaction: "heart"},
          {name: "Fitness", category: "#03c04a", selected: true, reaction: "like"},
          {name: "Games", category: "blue", selected: false, reaction: "none"},
          {name: "Family", category: "blue", selected: false, reaction: "none"},
        ],
        weekday: "",
      },
    };
    
    localStorage.setItem('myPalette', JSON.stringify(initialData));
  }
}
// Read data from local storage
export const readLocalStorage = () => {
  const data = localStorage.getItem('myPalette');
  if (!data) {
    console.log("no data to read from local, setting it to {}")
  } else {
    console.log("data was read")
  }  
  return JSON.parse(data || {});
};

// Write data to local storage
export const writeLocalStorage = (data) => {
  localStorage.setItem('myPalette', JSON.stringify(data));
};

