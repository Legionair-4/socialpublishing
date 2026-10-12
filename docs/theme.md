# Design system and theming

The app uses Tailwind CSS v4, shadcn/ui-compatible semantic CSS variables and next-themes.

## Theme modes
Light, dark and system are supported. User selection is persisted by next-themes. The root layout suppresses expected theme-class hydration warnings.

## Brand direction (initial)
Calm blue primary, cool neutral surfaces, high-contrast typography, subtle rounded cards, generous spacing. The theme is intentionally easy to rebrand.

## How to change the palette
Edit semantic OKLCH tokens in `src/app/globals.css`, in both `:root` and `.dark`. Do not hardcode brand hex values into components. Use semantic classes such as `bg-primary`, `text-muted-foreground`, `border-border` and `bg-card`. Adjust `--radius` for global corner shape.

## UI components
`components.json` configures shadcn/ui CLI and `src/lib/utils.ts` supplies `cn`. Components can be added using shadcn's CLI as required; do not install a large component library without need.

## Accessibility
Maintain WCAG AA contrast, visible keyboard focus, meaningful labels, reduced-motion support where animation is introduced, and responsive layouts.
