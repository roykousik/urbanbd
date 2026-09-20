# Urban Interior — Project Gallery System

A high-performance, offline-first Project Gallery system built with pure Vanilla HTML, CSS, and JavaScript.

---

## 1. System Architecture

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

---

## 2. Adding a New Project

Adding a new project requires just two steps:

### Step 1: Create the Project Folder & Assets
1. Create a new folder inside `assets/projects/` using kebab-case:
   ```bash
   mkdir assets/projects/luxury-penthouse
   ```
2. Place the project's cover and gallery images inside:
   - `cover.png` (Used as the card thumbnail and hero banner)
   - `01.png`, `02.png`, `03.png`, `04.png`, `05.png`, `06.png`, `07.png`, `08.png`

### Step 2: Register the Project in `assets/js/projects-data.js`
Open `assets/js/projects-data.js` and append an object to the `PROJECTS` array:

```javascript
{
  id: "luxury-penthouse",
  title: "Luxury Penthouse",
  category: "home", // Must match one of: office, kitchen, home, living, dining, work-study
  description: "Bespoke high-rise living tailored with bespoke marble and panoramic skyline views.",
  images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
}
```

The new project will automatically appear on:
- `index.html` (Homepage "Recent Projects" grid)
- `projects.html` (Portfolio catalog and relevant category filter)
- `project.html?id=luxury-penthouse` (Dedicated project detail page with lightbox)

---

## 3. Image Guidelines & Specifications

| Asset | Format | Aspect Ratio / Dimensions | Max File Size | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `cover.png` | **PNG only** (`.png`) | 1200 × 630 px (~1.91:1) | < 500 KB | Card thumbnail & detail hero banner |
| `01.png` – `08.png` | **PNG only** (`.png`) | 4:3 (e.g. 1600 × 1200 px) | < 800 KB | Detail page gallery grid & lightbox modal |
| `placeholder.png` | **PNG only** (`.png`) | 1200 × 630 px | ~26 KB | Standard fallback for missing/broken images |

> **Naming Rule:** All image filenames and extensions must be strictly lowercase (e.g., `cover.png`, `01.png`). Do not use `.jpg`, `.jpeg`, or uppercase `.PNG`.

---

## 4. Key Features & Standards

1. **Zero External Dependencies / Build Tools:**
   - 100% vanilla HTML5, CSS3, and JavaScript.
   - Fully compatible with double-clicking files locally (`file://`) and hosting on any static web server.
2. **Category Filter & Deep Linking:**
   - Instant filtering across: **All | Office | Kitchen | Home | Living | Dining | Work & Study**.
   - URL synchronization via query parameter `?category=kitchen` without reloading the page.
   - Smooth horizontal scroll on mobile with touch snapping.
3. **Full-Screen Lightbox Modal:**
   - Real-time image counter (`3 / 8`) and dynamic captions.
   - Left/Right keyboard navigation (`←` / `→`) and Escape (`Esc`) to close.
   - Touch swipe gestures with horizontal threshold detection (> 50px).
   - Background scroll lock preventing content scroll behind the lightbox.
4. **Resilient Error Handling:**
   - Automatic fallback to `assets/placeholder.png` via native `onerror` handlers if any image fails to load.
   - Graceful 404 state when navigating to an invalid or missing project ID (`project.html?id=unknown`).

---

## 5. Hero Background Animation Tuning

The homepage hero section features a lightweight, GPU-accelerated ambient animation recreating the cinematic panning camera and lighting feel of high-end architectural reference sites ([renoma.framer.website](https://renoma.framer.website/)).

### A. Tuning Floating Light Particles & Ambient Drift
Open `index.html` and locate the `HERO_ANIMATION_CONFIG` object near line 800:

```javascript
const HERO_ANIMATION_CONFIG = {
  // Speed multiplier: 0.5 = slow & calm, 1.0 = standard, 2.0 = fast
  speed: 1.0,
  
  // Base particle count on desktop (1024px+). Auto-scales to 60% on tablet and 30% on mobile
  densityDesktop: 48,
  
  // Dimensions & Glow
  minRadius: 1.0,               // Minimum particle radius (px)
  maxRadius: 2.8,               // Maximum particle radius (px)
  glowRadius: 8,                // Soft glow halo radius (px)
  
  // Color & Opacity (RGB format for smooth alpha blending)
  colorRGB: '254, 240, 138',     // Warm golden tone (#fef08a)
  baseOpacity: 0.65,            // Peak particle opacity
  minOpacity: 0.12,             // Minimum particle opacity
  
  // Mouse Parallax on Desktop
  enableMouseParallax: true,    // Toggle subtle mouse movement reaction
  mouseParallaxFactor: 0.035,   // Mouse sway intensity
};
```

### B. Tuning the Cinematic Image Pan (Ken Burns Effect)
Open `styles.css` and locate `--hero-pan-duration` inside `:root` (around line 47):

```css
:root {
  /* Set duration of the slow camera pan & zoom cycle (e.g., 20s = faster, 35s = ultra-slow) */
  --hero-pan-duration: 28s;
}
```

### C. Performance & Accessibility Guarantees
- **Offline & Zero Latency**: No heavy 15MB video downloads; runs instantly via `file://`.
- **Automatic Pause**: Pauses when the user switches browser tabs (`visibilitychange`) or scrolls past the hero section (`IntersectionObserver`).
- **Low-Power Fallback**: Automatically reduces particle density or falls back to the static image if frame times exceed 50ms for 5 consecutive frames.
- **Accessibility**: Automatically disables all motion when `prefers-reduced-motion: reduce` is detected in system settings.

---

## 6. Contact Section Configuration (Web3Forms Automatic Sending)

### A. Centralized Settings (Web3Forms Access Key & WhatsApp)
At the top of the inline script in `index.html` (around line 860), configure the Web3Forms Access Key and WhatsApp number:

```javascript
// Centralized Contact Form & WhatsApp Configuration
const WEB3FORMS_ACCESS_KEY = "PASTE_FULL_WEB3FORMS_ACCESS_KEY_HERE";
const WHATSAPP_NUMBER = "8801820260730"; // International format, no '+' or dashes
```

- **How to get the Web3Forms Access Key**:
  1. Visit [https://web3forms.com](https://web3forms.com).
  2. Enter `kousikroy@gmail.com` and generate/copy your free access key.
  3. Paste your key into `WEB3FORMS_ACCESS_KEY` in `index.html`.
- **Domain Whitelisting & Origin Security**:
  - The form is registered in Web3Forms with `http://localhost:3000` for local development.
  - When the website goes live on production, add your custom domain (e.g. `https://urbaninteriorbd.com`) in your Web3Forms dashboard settings under Allowed Domains.
- **Local Server Testing Requirement**:
  - Web3Forms origin validation and browser security require running the site via a local HTTP server (such as `http://localhost:3000`), rather than double-clicking or loading through `file://`.
  - Start a local server:
    ```bash
    # Python 3
    python3 -m http.server 3000
    # Or Node.js
    npx serve -p 3000 .
    ```

### B. Submission Flow & Spam Protection
- **Automatic Background Dispatch (`fetch`)**: Submitting "Book Design Consultation →" sends the inquiry directly to `https://api.web3forms.com/submit` in the background without reloading or redirecting away from the page.
- **Loading State & Double-Click Guard**: While submitting, the button is disabled and displays a clean `"Sending..."` state without shifting dimensions or layout.
- **Email Notification Formatting**:
  - **Subject**: `Project Typology: <selected item>` (e.g. `Project Typology: Kitchen Interiors Design`).
  - **Sender Name**: `"URBAN Interior BD Website"`.
  - **Reply-To**: Automatically set to the client's email so replying in your inbox replies directly to the client.
  - **Content**: Includes Full Name, Email, Phone (with `+880` prefix), Project Typology, and Project Details (supporting Bengali/Unicode text and line breaks).
- **Anti-Spam Measures**:
  - **Honeypot (`botcheck`)**: Hidden checkbox field invisible to human visitors. If populated by automated bots, the form simulates a successful submission without dispatching any network request.
  - **3-Second Delay Guard**: Submissions attempted in less than 3 seconds from initial page load are blocked.
- **Failure Fallback**: If the key is missing/placeholder, internet is down, request times out (15s limit), or the service encounters an error:
  - Form fields remain intact (inputs are **not** cleared).
  - An error banner is displayed: `"Sorry, we couldn't send your request. Please try again, or contact us directly."`
  - Two responsive fallback action buttons appear (each $\ge$ 44px tall):
    1. **Email us**: Opens visitor's email client with prefilled draft addressed to `kousikroy@gmail.com`.
    2. **Chat on WhatsApp**: Opens direct chat with `8801820260730`.

### C. Project Typologies & Phone Number Field
- **Project Typology**: Dropdown contains 6 curated design categories:
  1. Office Work Space Design
  2. Kitchen Interiors Design
  3. Home Interiors Design
  4. Living Space Interiors Design
  5. Dining Interiors Design
  6. Work & Study Space Design
- **Phone Number Field**: Displays a fixed, non-editable `+880` prefix with subtle divider and input area. Automatically strips leading `0`, `+880`, or `880` and non-digit characters on typing and paste, validating for a 10-digit Bangladesh mobile number starting with `1[3-9]`.

### D. Contact Person Avatar Asset
The contact card displays the team representative's photo from:
```text
assets/contact/contact-person.png
```
- **Image Specifications**: Square PNG format (`.png`), dimensions between 200×200 and 400×400 px, optimized under 150 KB.
- **Automatic Fallback**: If the file is missing or fails to load, an automatic `onerror` handler seamlessly displays a navy circle with gold initials **"UI"**, preventing any broken-image icon from ever appearing.

---

## 7. Process Section Configuration & Step Customization

### A. Navigation Menu Item
- **Desktop & Mobile Navigation**: In `index.html`, the link `<a href="#process" class="nav-link">Process</a>` is positioned directly after "About".
- **Footer Quick Links**: Located under the "Quick Links" column in `index.html` as `<li><a href="#process">Process</a></li>` directly after "About Us".
- **ScrollSpy & Smooth Offset**: Automatically tracked by the global scroll spy and smooth scroll handler, landing with the section header cleanly below the sticky navigation bar.

### B. Editing or Adding Process Steps
Process steps are defined in one centralized data structure in `index.html` (inside the inline `<script>`, around line 1270):

```javascript
/* ==========================================================================
   PROCESS STEPS MASTER DATA
   Edit or add steps here. Changes automatically reflect in the Process section.
   ========================================================================== */
const PROCESS_STEPS = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Step 01 - Book Consultation",
    description: "Share your vision, budget and timeline with our design team in a simple first call.",
    badgeText: "Book Consultation",
    iconSvg: `<svg ...>...</svg>`
  },
  // Add or edit steps here...
];
```

- **Adding a Step**: Simply append a new step object to `PROCESS_STEPS`. The carousel automatically adapts its track, scroll calculation, arrow disabling logic, and mobile dot indicators.
- **Custom Icons**: Each step uses an inline SVG matching the "Complete Interior Solutions" architectural line-art aesthetic (`#1e293b` 2px strokes with `#70a9dc`, `#f5c542`, `#e84141`, and `#ffffff` accents) within a gold-ring squircle container.
- **Step Badges**: Styled as non-clickable phase indicator pills (`.process-step-badge`) to maintain clarity for visitors without misleading click affordances.


