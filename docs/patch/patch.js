const patch = [
  {
    id: 4,
    date: "2023-12-01",
    title: "dunno yet",
    content: [
      'Moved the new entry modal from the day page to a new modal folder.',
      'Added a new modal for icon selection.',
      'TODO: Add icons to entries, to state.'
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