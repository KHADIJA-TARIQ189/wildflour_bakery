# Wildflour Bakery — Module 2 Starter

A responsive one-page site covering everything in the "Responsive Design & Styling" module:

- **Responsive layout** — fluid down to mobile, with tablet and mobile breakpoints at 900px and 640px (`css/styles.css`)
- **Flexbox** — nav bar, hero split, gallery row, contact columns
- **CSS Grid** — about section and the menu card grid
- **Curated colors, type, icons, buttons** — a plum/honey/flour palette, a Fraunces + Work Sans + IBM Plex Mono type system, styled `.btn` variants, and a custom SVG stamp icon
- **Navigation bar with smooth scrolling** — fixed header, hamburger menu on mobile, smooth-scroll offset in `js/script.js` so sections don't hide behind the nav

## Structure
```
wildflour-bakery/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/        (empty — drop real images here and swap them into index.html)
```

## Run it
No build step needed — just open `index.html` in a browser, or serve the folder locally:
```
python3 -m http.server
```

## Where to customize
- Swap the placeholder `.about__swatch` and `.gallery__item` blocks for real `<img>` tags in `assets/`.
- Colors and fonts are all defined as CSS variables at the top of `css/styles.css` — change them there and they cascade everywhere.
- The contact form in `#contactForm` is front-end only; wire it to a real endpoint when you're ready.
