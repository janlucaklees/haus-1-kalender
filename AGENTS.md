# Repository Guidelines

## Project Structure & Module Organization

This is a small React app that generates a printable community house calendar.
Source files live in `src/`. The main entry is `src/main.tsx`, with calendar
components in `src/Calendar/`, print layout components in `src/Print/`, table
helpers in `src/Table/`, and translations in `src/locales/de-DE.json`.
`index.html` is the Vite HTML entry and mounts `src/main.tsx`. Built static
assets are emitted to `dist/` and deployed to GitHub Pages by the Pages
workflow.

## Build, Test, and Development Commands

Use Bun, because the repository includes `bun.lock`.

- `bun install` installs dependencies.
- `bun run start` runs the Vite development server with hot reloading.
- `bun run build` type-checks the app and creates a production build in
  `dist/`.
- `bun run preview` serves the production build locally.

The public path is configured as `/haus-1-kalender/` in `vite.config.ts`, so
check generated links when changing deployment behavior.

## Coding Style & Naming Conventions

Follow `.editorconfig`: UTF-8, LF line endings, tabs with indent size 2, final
newlines, trimmed trailing whitespace, and an 80-character target line length.
Use React function components and keep component filenames in PascalCase, such
as `Calendar.tsx` and `TimeSlot.tsx`. Keep small utility modules in camelCase,
such as `range.ts` and `browser.ts`.

Styling is colocated with components through CSS Modules; reuse existing
`*.module.css` patterns instead of introducing a separate styling approach.
Locale keys belong in `src/locales/de-DE.json` and should be accessed through
`react-i18next`.

## Testing Guidelines

There is currently no dedicated test framework configured in `package.json`.
For behavior changes, verify locally with `bun run start` and check the rendered
calendar in Chrome. For release changes, run `bun run build` and inspect the
generated `dist/` output. Print-related changes should be checked through
browser print preview, with Chrome as the primary target.

## Commit & Pull Request Guidelines

The existing history uses short, imperative commit subjects, for example
`Fixed reset.css missing`, `Improved styling`, and `Updated bundled code`.
Keep commits focused on one change.

Pull requests should describe the visible calendar or print behavior changed,
list the local verification performed, and include screenshots or print-preview
notes when layout output changes.
