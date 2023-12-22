# Data Structure for Local Storage

This document describes the structure of the data that will be stored in local storage.

## `myPalette`

- The key is a date for easier queries for the weekly/monthly view.

```json
{
	"2023-08-28": {
		"entries": [
			{
				"id": "a850caf7-4a05-4cf7-8ef9-cc8b2806fe22",
				"name": "Entry 1",
				"category": "#03c04a",
				"selected": true,
				"reaction": "dislike",
				"icon": {prefix: "fas", iconName: "medal", icon: [512, 512, [127941], "f5a2",…]}
			},
			// ... other entries for this date
		],
		"weekday": "Monday"
	},
	// ... other date entries
}
```

- Currently not being used:

## `myPaletteEntries`

-

- Used to store most up-to-date list of entries.

```json
[
	"School",
	"Gym"
	// ... other entries
]
```
