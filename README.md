# Tasya Amalia Salsabila Portfolio

Premium static portfolio website for an Android Engineer, built with Next.js App Router, TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, and Lucide Icons.

## Run Locally

```bash
npm install
npm run dev
```

## Static Export

The project is configured for GitHub Pages:

```bash
npm run build
```

Next.js writes the static site to `out/` because `next.config.ts` uses:

```ts
output: "export"
images: {
  unoptimized: true
}
```

Replace `public/tasya-amalia-salsabila-cv.pdf` with the final CV before publishing.
