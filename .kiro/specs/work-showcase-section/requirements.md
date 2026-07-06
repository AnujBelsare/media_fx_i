# Requirements Document

## Introduction

This feature replaces the existing list-based `ProjectSection.tsx` in the MediaFXI creative agency website with a premium editorial masonry grid. The new work showcase section presents the agency's portfolio projects in an asymmetric controlled grid layout inspired by luxury fashion and architecture studio websites. It introduces smooth scroll via Lenis, scroll-triggered reveal animations via GSAP ScrollTrigger, cursor-following interaction, video card support, and a globally applied modern scrollbar — delivering an Awwwards/Locomotive-level motion quality consistent with the MediaFXI brand identity.

---

## Glossary

- **Showcase_Section**: The full-page React component (`ProjectSection.tsx`) that renders the portfolio work grid, replacing the current list-based implementation.
- **Masonry_Grid**: The controlled asymmetric CSS grid layout that positions cards in a predefined pattern of tall, wide, and standard sizes to create visual rhythm.
- **Work_Card**: An individual card unit within the Masonry_Grid that displays either an image or a video along with project metadata.
- **Image_Card**: A Work_Card variant that renders a static project image using Next.js `<Image>` with lazy loading.
- **Video_Card**: A Work_Card variant that renders an HTML5 `<video>` element which autoplays muted when the card enters the viewport.
- **Hover_Overlay**: A semi-transparent black layer that fades in over a Work_Card on hover, revealing the project title, description, and a "View Project" link.
- **Cursor_Follower**: A floating "View Project" label that tracks the user's cursor position with a smooth lag effect while hovering over any Work_Card.
- **Scroll_Reveal**: The GSAP ScrollTrigger animation that transitions cards from `opacity: 0, y: 60px` to `opacity: 1, y: 0` as they enter the viewport.
- **Parallax_Effect**: A subtle vertical offset animation applied to larger cards as the user scrolls, creating a depth illusion.
- **Lenis**: The `@studio-freight/lenis` smooth-scroll library that intercepts native scroll and provides inertia-based scrolling globally.
- **SmoothScroll_Provider**: A React client component that initialises Lenis, integrates it with GSAP's ticker, and wraps the application layout.
- **Project_Interface**: The TypeScript `Project` interface in `app/data/Project.ts` that defines the shape of project data objects.
- **Slug**: A URL-safe string identifier for a project used to construct the project detail page route (e.g., `/work/nova-identity-campaign`).
- **Card_Size**: A categorical descriptor (`tall`, `wide`, `standard`) assigned per card in the predefined Masonry_Grid layout pattern.
- **Brand_Yellow**: The MediaFXI primary brand colour `#E8C832`.
- **Section_Background**: The dark background colour `#111` applied to the Showcase_Section.

---

## Requirements

---

### Requirement 1: Data Model Extension

**User Story:** As a developer, I want the Project data model to include video, description, and slug fields, so that Work_Cards can render mixed media and link to project detail pages.

#### Acceptance Criteria

1. THE `Project_Interface` SHALL include an optional `video` field of type `string` that accepts a video URL.
2. THE `Project_Interface` SHALL include a required `description` field of type `string` that accepts a short project description of no more than 120 characters.
3. THE `Project_Interface` SHALL include a required `slug` field of type `string` that accepts a URL-safe kebab-case identifier.
4. WHEN the project data array is exported from `app/data/Project.ts`, THE `Project_Interface` SHALL retain all existing fields (`number`, `title`, `category`, `image`) without modification.
5. THE project data array SHALL contain exactly 6 entries, each updated with a `description` and a `slug` value.
6. WHERE a project entry includes a `video` field, THE project data array SHALL assign a valid video URL string to that field for at least 2 of the 6 entries.

---

### Requirement 2: Masonry Grid Layout

**User Story:** As a site visitor, I want to see portfolio projects arranged in a controlled asymmetric masonry grid, so that the work showcase feels premium and editorially distinct.

#### Acceptance Criteria

1. THE `Showcase_Section` SHALL render all 6 Work_Cards within a CSS grid that defines a controlled column and row layout.
2. THE `Masonry_Grid` SHALL assign each Work_Card one of three `Card_Size` variants — `tall`, `wide`, or `standard` — according to a fixed predefined layout pattern.
3. THE `Masonry_Grid` SHALL use a consistent gap between all cards of no less than 12px and no more than 24px.
4. WHILE the viewport width is 1024px or greater, THE `Masonry_Grid` SHALL display cards in a multi-column layout of at least 3 columns.
5. WHILE the viewport width is between 640px and 1023px inclusive, THE `Masonry_Grid` SHALL collapse to a 2-column layout.
6. WHILE the viewport width is below 640px, THE `Masonry_Grid` SHALL collapse to a single-column layout with all cards rendered at `standard` height.
7. THE `Showcase_Section` SHALL include a section label displaying "Work" in Brand_Yellow using the `text-[10px] tracking-[0.3em] uppercase font-bold` typographic style, consistent with the existing design.
8. THE `Showcase_Section` SHALL apply Section_Background (`#111`) as its background colour.
9. THE `Showcase_Section` SHALL include generous padding — no less than 80px top and 120px bottom on desktop — to maintain whitespace rhythm.

---

### Requirement 3: Image Card Rendering

**User Story:** As a site visitor, I want project images to load efficiently and display beautifully within the masonry grid, so that performance is high and the visual quality feels premium.

#### Acceptance Criteria

1. THE `Image_Card` SHALL render project images using the Next.js `<Image>` component with `fill` layout and `object-cover` fit.
2. THE `Image_Card` SHALL apply `loading="lazy"` (or equivalent Next.js lazy loading behaviour) to all images that are not in the initial viewport.
3. WHEN a Work_Card is assigned a `tall` Card_Size, THE `Image_Card` SHALL maintain an aspect ratio that is taller than 1:1 (portrait orientation).
4. WHEN a Work_Card is assigned a `wide` Card_Size, THE `Image_Card` SHALL maintain an aspect ratio that is wider than 1:1 (landscape orientation).
5. WHEN a Work_Card is assigned a `standard` Card_Size, THE `Image_Card` SHALL render at a square or near-square aspect ratio.

---

### Requirement 4: Video Card Rendering

**User Story:** As a site visitor, I want video projects to autoplay silently when visible, so that the showcase feels dynamic without being intrusive.

#### Acceptance Criteria

1. WHERE a project entry has a `video` field defined, THE `Video_Card` SHALL render an HTML5 `<video>` element in place of the Next.js `<Image>` component.
2. THE `Video_Card` SHALL set the video element's `muted` attribute to `true`, `loop` attribute to `true`, and `playsInline` attribute to `true`.
3. WHEN a `Video_Card` enters the visible viewport (intersection ratio ≥ 0.3), THE `Video_Card` SHALL call `.play()` on the video element.
4. WHEN a `Video_Card` exits the visible viewport (intersection ratio < 0.3), THE `Video_Card` SHALL call `.pause()` on the video element.
5. THE `Video_Card` SHALL apply `object-cover` styling so the video fills its card container without letterboxing.
6. IF the browser prevents autoplay due to policy restrictions, THEN THE `Video_Card` SHALL display the project's `image` field as a fallback poster frame.

---

### Requirement 5: Hover Overlay Interaction

**User Story:** As a site visitor, I want hovering over a card to reveal project details with a smooth animated overlay, so that the browsing experience feels refined and intentional.

#### Acceptance Criteria

1. WHEN a user's pointer enters a Work_Card, THE `Hover_Overlay` SHALL fade in with `opacity` transitioning from 0 to 1 within 300ms using an ease-in-out curve.
2. THE `Hover_Overlay` SHALL apply a black background with opacity between 0.60 and 0.70 (i.e., `rgba(0,0,0,0.65)`).
3. WHEN the `Hover_Overlay` becomes visible, THE `Hover_Overlay` SHALL display the project's `title`, `category`, and `description` fields.
4. WHEN the `Hover_Overlay` becomes visible, the project title, category, and description text SHALL animate upward from `y: 16px` to `y: 0` within 350ms using an ease-out curve.
5. WHEN the `Hover_Overlay` becomes visible, THE `Hover_Overlay` SHALL display a "View Project" link element styled with Brand_Yellow colour.
6. WHEN a user's pointer leaves a Work_Card, THE `Hover_Overlay` SHALL fade out with `opacity` transitioning from 1 to 0 within 250ms.
7. WHEN a Work_Card is hovered, THE Work_Card image or video SHALL scale to between 1.03 and 1.05 using a CSS transform transition of 500ms ease-out.

---

### Requirement 6: Cursor Follower

**User Story:** As a site visitor, I want a "View Project" label to follow my cursor smoothly while hovering over cards, so that the interaction feels premium and playful.

#### Acceptance Criteria

1. THE `Cursor_Follower` SHALL render as a floating DOM element positioned with `position: fixed` and `pointer-events: none`, rendered above all other content via `z-index`.
2. WHEN the user's cursor moves anywhere within a Work_Card, THE `Cursor_Follower` SHALL update its position to follow the cursor with a smooth lag of between 80ms and 150ms (lerp or spring-based).
3. WHEN the user's cursor enters a Work_Card, THE `Cursor_Follower` SHALL become visible by transitioning `opacity` from 0 to 1 within 200ms.
4. WHEN the user's cursor leaves all Work_Cards, THE `Cursor_Follower` SHALL transition `opacity` from 1 to 0 within 200ms.
5. THE `Cursor_Follower` SHALL display the text "View Project" styled in a minimal sans-serif font at approximately 12–14px, with a dark background pill or circular shape.
6. THE `Cursor_Follower` SHALL NOT be rendered or made visible on touch devices (pointer: coarse media query).

---

### Requirement 7: Card Clickability and Navigation

**User Story:** As a site visitor, I want to click anywhere on a card to navigate to the project detail page, so that discovering project details is effortless.

#### Acceptance Criteria

1. THE entire Work_Card surface SHALL be wrapped in a Next.js `<Link>` element pointing to `/work/[slug]` where `[slug]` is the project's `slug` field.
2. WHEN a user clicks anywhere within a Work_Card, THE `Showcase_Section` SHALL navigate to the project detail route `/work/[slug]`.
3. THE Work_Card link SHALL NOT open in a new browser tab by default.

---

### Requirement 8: Scroll-Triggered Reveal Animations

**User Story:** As a site visitor, I want cards to animate in progressively as I scroll down the page, so that the reveal feels cinematic and builds visual anticipation.

#### Acceptance Criteria

1. WHEN a Work_Card enters the viewport during scroll, THE `Scroll_Reveal` animation SHALL transition the card from `opacity: 0, y: 60px` to `opacity: 1, y: 0`.
2. THE `Scroll_Reveal` animation SHALL use a duration of 0.8 seconds with an ease-out or power2.out curve.
3. THE `Scroll_Reveal` animation SHALL use GSAP ScrollTrigger with a `start` value of `"top 85%"` so cards begin animating before they fully enter the viewport.
4. THE `Scroll_Reveal` animation SHALL stagger cards within the same logical row by 0.12 seconds per card.
5. WHEN the `Scroll_Reveal` animation completes, THE Work_Card SHALL remain fully visible at `opacity: 1, y: 0` regardless of subsequent scroll direction.
6. WHERE a Work_Card has a `tall` or `wide` Card_Size, THE `Parallax_Effect` SHALL apply a vertical offset of between -30px and 30px driven by the ScrollTrigger scroll progress of that card's scroll range.

---

### Requirement 9: Smooth Scrolling via Lenis

**User Story:** As a site visitor, I want the entire page to scroll with inertia-based smoothness, so that the browsing experience matches the premium editorial feel of the design.

#### Acceptance Criteria

1. THE `SmoothScroll_Provider` SHALL initialise a Lenis instance with `duration` between 1.0 and 1.4 and `easing` set to an ease-in-out cubic function.
2. THE `SmoothScroll_Provider` SHALL integrate Lenis with the GSAP ticker by calling `gsap.ticker.add` with the Lenis `raf` callback so ScrollTrigger and Lenis remain in sync.
3. THE `SmoothScroll_Provider` SHALL call `ScrollTrigger.update()` on each Lenis scroll event.
4. WHEN the `SmoothScroll_Provider` component unmounts, THE provider SHALL call `lenis.destroy()` to clean up event listeners and animation frames.
5. THE `SmoothScroll_Provider` SHALL be rendered as a client component wrapping the `<body>` content in `app/layout.tsx`.
6. THE `SmoothScroll_Provider` SHALL disable Lenis on touch devices (pointer: coarse) so native scroll behaviour is preserved on mobile.

---

### Requirement 10: Global Scrollbar Styling

**User Story:** As a site visitor, I want the browser scrollbar to feel minimal and modern, so that it does not distract from the editorial layout.

#### Acceptance Criteria

1. THE scrollbar track SHALL be rendered as fully transparent (no visible background).
2. THE scrollbar thumb SHALL be styled with `background-color: rgba(120, 120, 120, 0.4)` and `border-radius: 999px`.
3. THE scrollbar width SHALL be exactly 6px on WebKit browsers (`::-webkit-scrollbar { width: 6px }`).
4. THE scrollbar styles SHALL be applied globally via `app/globals.css`.
5. WHEN Lenis smooth scrolling is active, THE body element SHALL have `overflow: hidden` applied so native scroll is suppressed and Lenis controls all scrolling.

---

### Requirement 11: Dependency Installation

**User Story:** As a developer, I want the required animation libraries installed in the project, so that I can build the scroll and smooth-scroll features without missing dependencies.

#### Acceptance Criteria

1. THE project `package.json` SHALL include `@studio-freight/lenis` as a production dependency.
2. THE project `package.json` SHALL include `gsap` as a production dependency.
3. WHEN `@studio-freight/lenis` is installed, THE installed version SHALL be compatible with React 19 and Next.js 16 (App Router).
4. WHEN `gsap` is installed, THE installed version SHALL include the `ScrollTrigger` plugin accessible via `gsap/ScrollTrigger`.
5. THE `SmoothScroll_Provider` and Showcase_Section components SHALL import Lenis and GSAP only within `"use client"` components or inside `useEffect` hooks to avoid server-side rendering errors.

---

### Requirement 12: Responsive Behaviour and Accessibility

**User Story:** As a site visitor using any device, I want the work showcase to be fully usable and visually correct, so that the experience is consistent across screen sizes and input methods.

#### Acceptance Criteria

1. WHILE the viewport width is below 640px, THE `Showcase_Section` SHALL disable the `Cursor_Follower` and suppress scroll-triggered stagger delays to prevent sluggish mobile performance.
2. WHILE the viewport width is below 640px, THE `Masonry_Grid` SHALL render in a single-column layout as specified in Requirement 2.6.
3. THE `Showcase_Section` SHALL preserve keyboard navigability — each Work_Card link SHALL be reachable via the Tab key and activatable via Enter.
4. WHEN a Work_Card receives keyboard focus, THE Work_Card SHALL display a visible focus ring using a 2px Brand_Yellow outline offset by 4px.
5. THE `Image_Card` `<Image>` component SHALL include a descriptive `alt` attribute derived from the project `title` field.
6. THE `Video_Card` `<video>` element SHALL include an `aria-label` attribute derived from the project `title` field.
7. IF a user has `prefers-reduced-motion: reduce` set in their operating system, THEN THE `Showcase_Section` SHALL disable Scroll_Reveal animations and Parallax_Effect, rendering cards immediately at their final `opacity: 1, y: 0` state.
