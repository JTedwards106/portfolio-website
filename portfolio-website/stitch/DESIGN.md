# Design System Documentation: Precision Editorial

## 1. Overview & Creative North Star
**Creative North Star: The Technical Architect**
This design system rejects the "generic developer template" in favor of a high-end editorial experience. It is designed to frame code and technical projects as works of art. We achieve this by blending the geometric precision of a code editor with the sophisticated whitespace of a premium digital magazine. 

To break the "standard" feel, we utilize **intentional asymmetry**, dramatic typography scales, and **tonal layering**. Instead of boxing content in, we allow it to breathe within a deep, multi-dimensional space defined by light and shadow rather than rigid lines.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep indigo and technical blues, punctuated by a high-energy cyan. 

### Surface Hierarchy & Nesting
We do not use flat backgrounds. Surfaces are treated as physical layers.
- **The "No-Line" Rule:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined through background shifts. For example, a project gallery section should use `surface_container_low` to sit naturally against a `surface` background.
- **Nesting depth:** 
    - Base Level: `surface_dim` (#0b1326)
    - Section Level: `surface_container_low` (#131b2e)
    - Component Level (Cards): `surface_container_high` (#222a3d)
    - Interactive Level (Popovers/Modals): `surface_container_highest` (#2d3449)

### The "Glass & Gradient" Rule
To inject "soul" into the UI:
- **Glassmorphism:** Navigation bars and floating action cards must use a semi-transparent `surface` color with a `backdrop-blur-xl` effect.
- **Signature Gradients:** Use a subtle linear gradient (135deg) from `primary` (#b4c5ff) to `primary_container` (#2563eb) for primary CTAs and hero highlights. This prevents the "flat-asset" look.

---

## 3. Typography
We use a "High-Low" typographic contrast to convey professional authority.

- **Display & Headlines (`Space Grotesk`):** This is our "technical" voice. It is geometric and slightly eccentric. Use `display-lg` for hero statements with a `-0.04em` letter spacing to feel "locked-in."
- **Body & Labels (`Inter`):** Our "functional" voice. `body-md` is the workhorse. For a premium feel, use `label-md` for metadata (e.g., "Stack," "Year") with uppercase transform and `0.1em` tracking.

**Editorial Tip:** Pair a `display-md` headline with a `label-md` uppercase tag directly above it to create an intentional, asymmetric hierarchy.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, not structural reinforcement.

- **The Layering Principle:** Avoid shadows for static elements. Place a `surface_container_lowest` card on a `surface_container_low` section to create a soft, natural lift.
- **Ambient Shadows:** For floating elements (Modals, Tooltips), use ultra-diffused shadows.
    - *Shadow Color:* Use a 15% opacity version of `primary_fixed_dim` rather than black.
    - *Values:* `0 20px 40px -10px rgba(0, 0, 0, 0.4)`.
- **The Ghost Border:** If a boundary is strictly required for accessibility, use a "Ghost Border": `outline_variant` (#434655) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** High-contrast. Background: `primary_container`. Text: `on_primary_container`. Transition: `200ms cubic-bezier(0.4, 0, 0.2, 1)`. On hover, apply a slight scale (1.02) and shift background to `primary`.
- **Secondary (Ghost):** No background. Ghost Border (20% opacity `outline_variant`). On hover, fill with `surface_bright` at 10% opacity.

### Cards (Project/Experience)
- **Style:** No borders. Background: `surface_container`.
- **Interaction:** On hover, the background shifts to `surface_container_highest` and the "Ghost Border" opacity increases to 40%. 
- **Content:** Use `spacing.10` (2.5rem) internal padding to ensure the content feels premium and uncrowded.

### Navigation Bar
- **Style:** Fixed top, `surface` background at 80% opacity with `backdrop-blur-md`.
- **Theme Toggle:** Use a custom-shaped toggle (rounded-full) with a transition that mimics a camera shutter.

### Input Fields
- **Style:** Underline-only or subtle "Ghost Border" container. 
- **Active State:** The bottom border animates from the center using `tertiary` (#2fd9f4). 
- **Error State:** Use `error` (#ffb4ab) for text and `error_container` for a very subtle background wash.

---

## 6. Do's and Don'ts

### Do
- **Use White Space as a Tool:** Use `spacing.24` (6rem) between major sections to signal a change in context.
- **Embrace Asymmetry:** Align text to the left but place supporting imagery or code snippets offset to the right.
- **Subtle Motion:** All hover states should feel fluid. Use `cubic-bezier` timing functions rather than `linear`.

### Don't
- **No 100% Opaque Borders:** Never use a solid, high-contrast border to separate sections.
- **No Divider Lines:** Avoid `<hr>` or thin lines between list items. Use background tonal shifts or increased vertical padding (`spacing.6`).
- **Don't Over-Color:** Keep the background dark and neutral (`surface_dim`). Let the `primary` and `tertiary` colors be "moments of light" rather than overwhelming fills.
- **No Default Shadows:** Avoid standard "drop shadows" that look muddy. If it's not a tinted ambient shadow, don't use it.