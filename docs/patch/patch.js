const patch = [
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