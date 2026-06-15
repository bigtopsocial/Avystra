# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 (App Router) marketing site for "Nisshant Menddhe Trading Institute" — a stock market trading education business. The entire frontend was generated as a pixel-perfect clone of a design (`ref.png`) using AI tooling; there is no backend, database, or API layer.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`)

There is no test suite configured.

## Architecture

- **App Router structure**: `app/page.tsx` is the landing page, composed entirely of section components from `components/` rendered in order: `Navbar`, `Hero`, `About`, `Courses`, `Benefits`, `FAQ`, `Footer`.
- **Dynamic course routes**: `app/courses/[courseId]/page.tsx` is a client component that looks up a course by `id` from `coursesData` in [lib/data.ts](lib/data.ts) via `useParams()`. There is no `generateStaticParams`/`notFound()` — unknown IDs render an inline "Course not found" message.
- **`lib/data.ts`** is the single source of truth for course content (id, title, level, pricing, descriptions, images). To add/edit a course, edit this array — both the courses listing section and the dynamic detail page read from it.
- **Single-page navigation**: `Navbar` links to in-page anchors on the home route (`/#about`, `/#courses`, `/#benefits`, `/#faq`), so section components must keep matching `id` attributes for these anchors to work.
- **WhatsApp lead capture**: The course detail page's enrollment form (`handleWhatsAppRedirect`) builds a pre-filled `wa.me` URL from form input instead of submitting to a backend. The WhatsApp number is currently a placeholder (`919876543210`) and needs to be replaced with the real business number.
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), utility-first, with `styled-components` and `framer-motion` also available as dependencies (used for scroll-linked animations, e.g. the SVG timeline on `/about`).
- **Path alias**: `@/*` maps to the project root (e.g. `@/components/Navbar`, `@/lib/data`).
- All interactive components (animations, hooks, routing params) are marked `'use client'`.
