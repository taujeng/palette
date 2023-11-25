## Getting Started

To Run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## List of Issues + Things I learned

- [x] bash: In the context page where data is initialized, there's a Reference Error: localStorage is undefined.
- Possible Solution:
  The issue you're encountering may be related to the fact that the code accessing localStorage is executed on the server side during the initial rendering on the server (for server-side rendering) or during build time (for static site generation), where the localStorage object is not available.
- To avoid this issue, you can wrap the localStorage code in a check to ensure that it's being executed on the client side. You can use the typeof operator to check if localStorage is defined before using it.
- Current Solution (11/21/23): Go back to using useEffect to ensure localStorage access is accessed on client side only. Initiate data in the provider page. Use a SECOND useEffect to dispatch the initial state to the EntryContext.

- [x] User interactions with entries change state, but don't carry over to new pages
- Turns out TimeMenu was the issue.
  `onChange={(e) => window.location.href=e.target.value}`
- Linking to a different page without using Link results in a full page reload, which also means re-initializing the data in context (thus making it look like all interactions were nullified). Links use client-side routing, which means when clicked, it triggers a client-side navigation without a full page reload, and only the necessary components for the new page are reloaded.
- Solution (11/25/23): Since we can't use Links within a `select` element, I'm using useRouter() from Next to navigate to the next page.

- [ ] Give each entry a unique ID. Referring to them by name is not enough, user could make duplicates.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
