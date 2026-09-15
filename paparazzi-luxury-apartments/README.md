# PAPARAZZI Luxury Apartments

Production-oriented static hotel website built with React, TypeScript, Vite, React Router and i18next.

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Replace hotel information

Central business information is in:

- `src/data/hotel.ts`
- `src/data/rooms.ts`
- `src/data/attractions.ts`

Every missing real-world value is marked with a `TODO` immediately above it.

## Replace images

Put optimized hotel photography in:

```text
public/images/
  hero/
  rooms/double/
  rooms/triple/
  rooms/apartment/
  gallery/
```

The application intentionally references local image paths rather than inventing external image URLs.

## Booking and contact links

Update Booking.com, Airbnb, phone, WhatsApp, Viber, Google Maps and social URLs in `src/data/hotel.ts`.

## Translations

Translations live in:

```text
src/i18n/locales/en/common.json
src/i18n/locales/de/common.json
src/i18n/locales/mk/common.json
```

Language detection uses `i18next-browser-languagedetector`. Supported regional browser codes such as `en-GB`, `de-DE` and `mk-MK` resolve through `load: "languageOnly"`. English is the fallback. A manual selection is persisted in localStorage.

To add a language:

1. Add the language code to `supportedLngs` in `src/i18n/index.ts`.
2. Add a locale JSON file.
3. Add the language to the header selector.

## Add a room

Add a typed entry to `src/data/rooms.ts`, including local image paths and a translation key under the matching room namespace.

## Add gallery images

Add `ImageItem` records to the gallery data in `src/components/gallery/Gallery.tsx`, then place the corresponding optimized files under `public/images/gallery/`.

## Analytics

`src/data/hotel.ts` contains:

```ts
// TODO: ADD REAL GOOGLE ANALYTICS ID
export const GA_MEASUREMENT_ID = "";
```

No analytics or non-essential tracking is loaded by default.

## SEO

Page metadata is managed by `src/components/common/SEO.tsx`. The static `public/robots.txt` and `public/sitemap.xml` are included. Before deployment, replace the sitemap locations with the production origin if required by the hosting setup.

## Accessibility

The implementation includes semantic HTML, keyboard-accessible controls, visible focus states, skip navigation, accessible accordion and lightbox controls, reduced-motion support and mobile navigation Escape handling.