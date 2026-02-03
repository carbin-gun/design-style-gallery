# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A bilingual (English/Chinese) UI Design Styles Gallery showcasing 58 frontend design styles. Each style has a preview card on the main gallery and a dedicated demo page with full implementations.

## Development

This is a static HTML/CSS/JS project with no build system. To develop:

1. Open `index.html` in a browser directly, or use any static server:
   ```bash
   python3 -m http.server 8000
   ```

2. The gallery auto-generates cards from `js/styles-data.js`

## Architecture

### Data Flow
- `style.csv` - Source of truth for all 58 style definitions (colors, keywords, use cases, etc.)
- `js/styles-data.js` - JavaScript array of style objects derived from CSV, used by gallery
- `js/gallery.js` - Generates preview cards and handles filtering; contains 58 preview generator functions (one per style)
- `styles/*.html` - Individual standalone demo pages, each implementing one style completely

### File Structure
```
index.html              # Main gallery page
css/gallery.css         # Gallery styling (dark theme, CSS variables)
js/
  styles-data.js        # Style metadata (names, colors, keywords, categories)
  gallery.js            # Card generation + 58 preview functions
styles/
  {N}-{style-name}.html # 58 self-contained demo pages (1-58)
```

### Style Categories
Styles are categorized for filtering:
- `General` - Universal design patterns
- `Landing Page` - Conversion-focused page designs
- `BI/Analytics` - Dashboard and data visualization styles

### Adding a New Style
1. Add entry to `style.csv` with all metadata columns
2. Add corresponding object to `stylesData` array in `js/styles-data.js`
3. Create preview function in `js/gallery.js` (e.g., `function newStylePreview(style)`)
4. Add preview function to `previewGenerators` object mapping
5. Create `styles/{N}-{style-name}.html` as standalone demo page
6. Update style count in `index.html` header

### Preview Functions Pattern
Each style has a dedicated preview generator in `gallery.js` that returns inline HTML/CSS:
```javascript
function minimalistPreview(style) {
    return `<div style="...">...</div>`;
}
```
Previews use inline styles for isolation and render directly in the gallery cards.

### Demo Page Pattern
Each `styles/*.html` is standalone with:
- Self-contained `<style>` block implementing the full design system
- Navigation back to gallery
- Multiple component examples (cards, buttons, forms, typography)
- Bilingual labels (English + Chinese)
