# Urban Interior — Project Gallery System

A high-performance, offline-first Project Gallery system built with pure Vanilla HTML, CSS, and JavaScript.

---

## System Architecture

```text
.
├── index.html                   # Homepage featuring 6 dynamic project cards & "View All Projects"
├── projects.html                # Complete portfolio catalog with category filters & deep linking
├── project.html                 # Single project detail page with 4:3 gallery grid & full-screen lightbox
├── styles.css                   # Primary website styling & design tokens
├── README.md                    # System documentation & asset guidelines
└── assets/
    ├── css/
    │   └── style.css            # Scoped design system tokens, gallery grid, lightbox & responsive rules
    ├── js/
    │   └── projects-data.js     # Single source of truth for all project metadata & images
    ├── placeholder.png          # 1200×630 fallback image when an asset is missing or loading fails
    └── projects/                # Organized project media directories
        ├── office-workspace/
        │   ├── cover.png        # Card thumbnail & hero banner (1200×630)
        │   └── 01.png – 08.png  # Gallery photos (4:3 aspect ratio)
        ├── kitchen-interiors/
        ├── home-interiors/
        ├── living-spaces/
        ├── dining-interiors/
        └── work-study-spaces/
```
