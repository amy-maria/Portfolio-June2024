# Portfolio — Amy Rowell

My developer portfolio, built with Next.js. It showcases my projects, education, and background, and includes a full Playwright end-to-end test suite I built and debugged.

I wanted to show an evolution of skills from prior portfolio builds.

## About this project

Before I got into development, I spent several years working in the Clinical Laboratory and with clinical information systems (LIS/HIS). That experience is a big part of why I moved into software — I saw firsthand how frustrating bad tools are for the people actually using them, and I wanted to build things that don't do that.

This site is where I show some of my work. It's also where I've been building out my QA, testing and emerging AI implementation skills.

## Tech stack

- **Next.js 15** (App Router) — React Server Components for the main layout and pages
- **TypeScript** — project data (project details, tech stack list, contact links) lives in typed arrays/interfaces rather than hardcoded into components, so adding a new project or link doesn't require touching the UI code
- **Tailwind CSS** — styling
- **next-view-transitions** — smooth transitions between the project grid and individual project detail pages
- **react-icons** — icons are referenced by name (e.g. `"FaGithub"`) rather than imported directly as JSX, which keeps things a bit cleaner
- **Playwright** — e2e testing (see below)
- **Vercel AI SDK + OpenAI** — powers the chat widget, which answers visitor questions about my background using a scoped system prompt (via `/api/chat`)

## Features

- **Home page** with hero section, a grid of project cards, an education/certificates section, and an About section listing my technical stack
- **Dynamic project routing** — `app/project/[id]/page.tsx` renders an individual project's extended description and links out to the live project, based on a numeric `id` rather than a separate page per project
- **In-page anchor navigation** — the nav bar scrolls to sections (Projects, Education, About, Contact) rather than loading separate pages
- **Footer contact links** — LinkedIn, GitHub, X, and email, all opening safely in new tabs
- **Mobile nav** — a hamburger menu with proper `aria-expanded` state for the collapsed nav
- **AI portfolio assistant** — a chat widget (bottom-right corner) backed by an API route calling OpenAI, answering visitor questions about my background using a scoped system prompt

## A few architecture decisions, and why

- **Server Components for the main pages** — most of this site is static content (project data, my bio, tech stack), so there's no real need to ship that logic to the client. Keeping it server-rendered keeps the client bundle smaller.
- **Typed data files instead of inline JSX** — project info and contact links live in their own `.ts` files (e.g. `projectsdata.ts`, `contactinformation.ts`). If I add a new project or swap a link, I'm editing a plain object. This is a big change compared to my earlier portfolio versions.
- **`next-view-transitions` for the project cards** — going from a project card to its detail page uses the browser's native View Transitions API instead of a heavier animation library, so the transition feels smooth.

## Testing

I used Playwright e2e suite for this site. Along the way it actually caught several real bugs — a broken template literal that was leaking raw JavaScript into a class name, insufficient color contrast in a few components, and a `<footer>` that was losing its accessibility landmark role depending on what it was nested inside.

The suite covers:

- **Navigation** — in-page anchor scrolling (Projects, Education, About, Contact) and the dynamic `/project/[id]` routing
- **Project pages** — card-to-detail navigation, screenshot alt text, and the external "view project" link
- **Footer/contact links** — LinkedIn, GitHub, X, and email, checked for correct `href`s and accessible names
- **Accessibility** — a full scan against WCAG 2.1 AA, currently passing with zero violations
- **Security** — every external link is checked for `rel="noopener noreferrer"`, and key response headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)



# Portfolio — Amy Rowell

My developer portfolio, built with Next.js. It showcases my projects, education, and background, and includes a full Playwright end-to-end test suite I debugged myself.

## About this project

Before I got into development, I spent several years working in Clinical Laboratory and clinical information systems (LIS/HIS) roles. That experience is a big part of why I moved into software — I saw firsthand how frustrating bad tools are for the people actually using them, and I wanted to build things that don't do that.

This site is where I show that work. It's also where I've been building out my QA and testing skills, which is why there's a real, working test suite behind it instead of just a claim in my About section.

I wanted to show the evolution from my different portfolio sites. For this version, I wanted begin with a wireframed version, use FigJam for design ideas and finish the rebuild of the site using Next.js.

## Tech stack

- **Next.js 15** (App Router) — React Server Components for the main layout and pages
- **TypeScript** — project data (project details, tech stack list, contact links) lives in typed arrays/interfaces rather than hardcoded into components, so adding a new project or link doesn't require touching the UI code
- **Tailwind CSS** — styling
- **next-view-transitions** — smooth transitions between the project grid and individual project detail pages
- **react-icons** — icons are referenced by name (e.g. `"FaGithub"`) rather than imported directly as JSX, which keeps things a bit cleaner and plays nicer with tree-shaking
- **Playwright** — e2e testing (see below)

## Features

- **Home page** with hero section, a grid of project cards, an education/certificates section, and an About section listing my technical stack
- **Dynamic project routing** — `app/project/[id]/page.tsx` renders an individual project's extended description and links out to the live project, based on a numeric `id` rather than a separate page per project
- **In-page anchor navigation** — the nav bar scrolls to sections (Projects, Education, About, Contact) rather than loading separate pages
- **Footer contact links** — LinkedIn, GitHub, X, and email, all opening safely in new tabs
- **Mobile nav** — a hamburger menu with proper `aria-expanded` state for the collapsed nav

## A few architecture decisions, and why

- **Server Components for the main pages** — most of this site is static content (project data, my bio, tech stack), so there's no real need to ship that logic to the client. Keeping it server-rendered keeps the client bundle smaller.
- **Typed data files instead of inline JSX** — project info and contact links live in their own `.ts` files (e.g. `projectsdata.ts`, `contactinformation.ts`). If I add a new project or swap a link, I'm editing a plain object, not hunting through component markup.
- **`next-view-transitions` for the project cards** — going from a project card to its detail page uses the browser's native View Transitions API instead of a heavier animation library, so the transition feels smooth without extra client-side weight.

I don't have hard performance numbers to back these up yet (no Lighthouse audit run against this specific deploy) — these are just the reasons I made the calls I made, not claims about measured results.

## Testing

I built out a full Playwright e2e suite for this site rather than just eyeballing it after every change. Along the way it actually caught several real bugs — a broken template literal that was leaking raw JavaScript into a class name, insufficient color contrast in a few components, and a `<footer>` that was losing its accessibility landmark role depending on what it was nested inside.

The suite covers:

- **Navigation** — in-page anchor scrolling (Projects, Education, About, Contact) and the dynamic `/project/[id]` routing
- **Project pages** — card-to-detail navigation, screenshot alt text, and the external "view project" link
- **Footer/contact links** — LinkedIn, GitHub, X, and email, checked for correct `href`s and accessible names
- **Accessibility** — a full [axe-core](https://github.com/dequelabs/axe-core) scan against WCAG 2.1 AA, currently passing with zero violations
- **Security** — every external link is checked for `rel="noopener noreferrer"`, and key response headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) are verified
- **Mobile nav** — the hamburger menu opens and closes correctly and updates `aria-expanded`
- **Keyboard navigation** — nav and footer links are reachable via Tab
- **Error handling** — confirms the Next.js error boundary shows a fallback UI instead of crashing


## Contact

- [LinkedIn](https://www.linkedin.com/in/amymrowell/)
- [GitHub](https://github.com/amy-maria)
- [X](https://x.com/amymrowell)
- amymrowell@gmail.com




Layout Wireframes

To eliminate UI logic bugs and blueprint the responsive grid dimensions before touching code, the interface layout was structured according to this programmatic schematic map:

```text
+-----------------------------------------------------------------------------------+

|  [PORTFOLIO.]                                [Work] [Process] [About]  [HIRE ME]  |  <- Global Header
+-----------------------------------------------------------------------------------+

|                                                                                   |
|                               Welcome to Our Community                            |  <- Hero Segment
|                                                                                   |
+-----------------------------------------------------------------------------------+

|  [ WORK GALLERY GRID SECTION ]                                                    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
|  | [Image Container]     | | [Image Container]     | | [Image Container]     |    |
|  |                       | |                       | |                       |    |
|  | Trip Planner          | | Data Extraction       | | Promptopia            |    |
|  | Python / AI           | | Python                | | Next.js / OAuth       |    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
+-----------------------------------------------------------------------------------+

|  [ CERTIFICATES / EDUCATION GRID SECTION ]                                        |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
|  | [Image Container]     | | [Image Container]     | | [Image Container]     |    |
|  | Web Development       | | Introduction Python   | | Advanced Python       |    |
|  +-----------------------+ +-----------------------+ +-----------------------+    |
+-----------------------------------------------------------------------------------+

|  [ ABOUT ME MODULE ]                                                              |
|  All about me. Career path and goals.                                             |
|  Technical Stack: [Py] [React] [Next.js] [TS] [Tailwind] [Node] [GraphQL]         |
+-----------------------------------------------------------------------------------+

|  (C) 2026 Amy Rowell                                          (Icon) (Icon) (Icon)|  <- Unified Footer Line
+-----------------------------------------------------------------------------------+