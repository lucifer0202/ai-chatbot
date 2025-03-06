This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
📦 ai-chatbot
├── 📂 app
│ ├── 📂 api
│ │ ├── 📂 auth
│ │ │ └── 📜 [...nextauth]/route.ts # NextAuth authentication API
│ │ ├── 📂 chat
│ │ │ └── 📜 route.ts # Chat API to handle OpenAI requests
│ ├── 📂 dashboard
│ │ ├── 📜 page.tsx # User dashboard (chat history)
│ ├── 📜 layout.tsx # Global layout with authentication provider
│ ├── 📜 page.tsx # Home page (chat interface)
│ ├── 📜 globals.css # Global styles
│
├── 📂 components
│ ├── 📜 Chat.tsx # Chat UI component
│ ├── 📜 Navbar.tsx # Top navigation bar
│ ├── 📜 LoginButton.tsx # Sign in/out button
│
├── 📂 lib
│ ├── 📜 prisma.ts # Prisma client for database access
│ ├── 📜 mongodb.ts # MongoDB connection handler
│
├── 📂 prisma
│ ├── 📜 schema.prisma # Database schema for chat messages
│
├── 📂 public
│ ├── 📜 favicon.ico # App icon
│
├── 📂 styles
│ ├── 📜 globals.css # Custom styles
│
├── 📂 utils
│ ├── 📜 auth.ts # Authentication utilities
│
├── 📜 .env.local # API keys and database credentials
├── 📜 next.config.js # Next.js configuration
├── 📜 tailwind.config.js # Tailwind configuration
├── 📜 tsconfig.json # TypeScript configuration
├── 📜 package.json # Dependencies
├── 📜 README.md # Project documentation
