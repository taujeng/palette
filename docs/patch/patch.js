const patch = [
  {
    id: 9,
    date: "2024-04-18",
    title: "How are you feeling?",
    content: [
      "Added a mood component to the day page.",
      "Updated Navigation bar and Landing page."
    ]
  }, 
  {
    id: 8,
    date: "2024-03-16",
    title: "Small UX improvements",
    content: [
      "Entries are now draggable and rearrangeable.",
      "The Time Menu's(Day/Weekly/Monthly view) order is now constant.",
    ]
  }, 
  {
    id: 7,
    date: "2024-01-26",
    title: "Color Palette",
    content: [
      "Introducing the color palette, a legend where users can define what each color category means to them.",
      "Added additional color options.",
      "Made some changes regarding design. Special thank you to Vivian for her valuable suggestions."
    ]
  }, 
  {
    id: 6,
    date: "2024-01-05",
    title: "Small fixes",
    content: [
      "Updated the monthly view's logic, and to be more mobile friendly.",
      "Fixed some bugs regarding interactions with entries."
    ]
  }, 
  {
    id: 5,
    date: "2023-12-23",
    title: "Optimization and Deployment",
    content: [
      "Added type annotations for better TypeScript integration.",
      "Deployed palette to the web via Netlify."
    ]
  }, 
  { 
    id: 4,
    date: "2023-12-08",
    title: "Introducing Icons",
    content: [
      'Moved the new entry modal from the day page to a new modal folder.',
      'Added a new modal for icon selection.',
      'Added a selection of icons (25 for now, will add more in future).',
      'Entries can now display an icon of your choice.',
      "Deselecting an entry will now also remove the reaction, and the icon's color.",
    ]
  },
  {
    id: 3,
    date: "2023-12-01",
    title: "Small improvements",
    content: [
      'Gave each entry a unique id. This results in a more bug-free app (eg. multiple entries with the same name).',
      'Fixed a side case where a month ends up using 5 weeks instead of the standard 4.',
      'Removed some useStates in the entries; now deriving more info from the context state.'
    ]
  },
  {
    id: 2,
    date: "2023-11-29",
    title: "The Monthly View",
    content: [
      'Added a monthly view. Simplified version of Google Calendar. Similar to the weekly view, each day will list up to 3 entries from that day.',
      'Added a footer. Just two lines at the moment.',
      'Re-styled entries, and added a remove entry button'
    ]
  },
  {
    id: 1,
    date: "2023-11-27",
    title: "The Weekly View",
    content: [
      'Just added a basic version of the weekly view. Each day in the weekly view can list up to 5 entries from that day, prioritizing entries with the reactions of "hearts" and then "likes."',
      'Made some adjustments so that reactions stop getting wiped clean when the app is restarted.'
    ]
  }
];



module.exports = patch;