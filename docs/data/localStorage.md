# Data Structure for Local Storage

This document describes the structure of the data that will be stored in local storage.

## Example

- This will be stored in local storage as `myPalette`

- The key is a date for easier queries for the weekly/monthly view.

```json
{
	"2023-08-28": {
		"entries": [
			{
				"name": "Entry 1",
				"category": "#03c04a",
				"selected": true,
				"reaction": "dislike"
			},
			{
				"name": "Entry 2",
				"category": "#03c04a",
				"selected": true,
				"reaction": "heart"
			}
			// ... other entries for this date
		],
		"weekday": "Monday"
	},
	"2023-08-29": {
		"entries": [
			{
				"name": "Entry 3",
				"category": "blue",
				"selected": false,
				"reaction": "none"
			}
			// ... other entries for this date
		],
		"weekday": "Tuesday"
	}
	// ... other date entries
}
```
