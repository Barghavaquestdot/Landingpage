---

```md
# 📘 The Guide — Data-Driven Decision-Making Landing Page

A high-converting, bilingual (EN/DE) landing page built using **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **react-i18next** to promote a 40-page decision-making guide.

---

## ✨ Features

- ✅ **App Router structure** with Client Components
- 🌐 **Internationalization (i18n)** using `react-i18next`
- 🪄 Fully responsive and animated with **Framer Motion**
- 🧩 Modular components: Hero, Problem, Solution, Who Needs It, Guide Preview, Author, Testimonials, and more
- 🌑 Dark mode layout (black & red theme)
- 🌍 Language switcher (English ↔ German)
- 🚀 Optimized with Next.js features: dynamic imports, metadata, image handling

---

## 📁 Folder Structure

<pre>
.
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   ├── GuidePreview.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── WhoNeeds.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   ├── utils/
│   │   └── withTranslationReady.tsx
│   ├── i18n.ts
│   └── page.tsx
├── public/
│   ├── favicon.ico
│   ├── section1.jpg
│   ├── section2.jpg
│   ├── problem.png
│   ├── guidesection.png
│   └── locales/
│       ├── en/
│       │   └── common.json
│       └── de/
│           └── common.json
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── README.md
</pre>

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React-i18next](https://react.i18next.com/)

---

```

## 🌐 i18n

Translation files are stored in:

- `/public/locales/en/common.json`
- `/public/locales/de/common.json`

````

All sections use `t('namespace.key')` or `t('key', { returnObjects: true })` and are wrapped with `withTranslationReady` for hydration-safe rendering.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Open in browser
http://localhost:3000
````

---

## 📦 Build & Run in Production

```bash
npm run build
npm start
```

---

## 🧩 Metadata Example

```ts
// app/layout.tsx or app/page.tsx
export const metadata = {
  title: "The Guide — Data-Driven Decision Making",
  description: "Unlock smarter decisions with our 40-page illustrated guide for modern professionals.",
  icons: {
    icon: "/favicon.ico",
  },
};
```
