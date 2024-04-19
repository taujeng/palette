## Getting Started

To Run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## List of Solved Problems

- [x] In the context page where data is initialized, there's a Reference Error: localStorage is undefined.
- Possible Solution:
  Issue could be that the code accessing localStorage is executed on the server side during the initial rendering on the server (for server-side rendering) or during build time (for static site generation), where the localStorage object is not available.
- To avoid this issue, you can wrap the localStorage code in a check to ensure that it's being executed on the client side. You can use the typeof operator to check if localStorage is defined before using it.
- Current Solution (11/21/23): Go back to using useEffect to ensure localStorage access is accessed on client side only. Initiate data in the provider page. Use a SECOND useEffect to dispatch the initial state to the EntryContext.

- [x] User interactions with entries change state, but don't carry over to new pages
- Turns out TimeMenu was the issue.
  `onChange={(e) => window.location.href=e.target.value}`
- Linking to a different page without using Link results in a full page reload, which also means re-initializing the data in context (thus making it look like all interactions were nullified). Links use client-side routing, which means when clicked, it triggers a client-side navigation without a full page reload, and only the necessary components for the new page are reloaded.
- Solution (11/25/23): Since we can't use Links within a `select` element, I'm using useRouter() from Next to navigate to the next page.

## To-Do List

- [x] Give each entry a unique ID. Referring to them by name is not enough, user could make duplicates.
- [ ] When adding a new entry, allow users to progress via the enter button.

## Potential Ideas

- [x] Icons for each entry. So I would need a collection of icons for the user to choose from.
- [x] Let the entries be draggable.
- [ ] Add an option that lets the user minimize entries. Will also need a side modal to allow users to view minimized entries, and let them re-add the entry.
- [ ] A small description/details for each entry, that can be edited. (don't think entry titles should be editable)
- [ ] Maybe a journal page available for each day. Need to use a text editor like Quill.js, TinyMCE, CKEditor, or Draft.js.
- [ ] Rather than have each entry have a category of color, what if the color was used to rate the day. EG. brown = 1 = worst day, green = 5 = best day
- [ ] Clicking on day in weekly/monthly view should take the user back to the day page but based off that day's data. would need a custom url as well
