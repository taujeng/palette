## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## List of Issues

- [x] bash: In the context page where data is initialized, there's a Reference Error: localStorage is undefined.
- Possible Solution:
  The issue you're encountering may be related to the fact that the code accessing localStorage is executed on the server side during the initial rendering on the server (for server-side rendering) or during build time (for static site generation), where the localStorage object is not available.
- To avoid this issue, you can wrap the localStorage code in a check to ensure that it's being executed on the client side. You can use the typeof operator to check if localStorage is defined before using it.
- Current Solution (11/21/23): Go back to using useEffect to ensure localStorage access is accessed on client side only. Initiate data in the provider page. Use a SECOND useEffect to dispatch the initial state to the EntryContext.

- [ ] Give each entry a unique ID. Referring to them by name is not enough, user could make duplicates.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
