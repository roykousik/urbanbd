/**
 * Urban Interior — Projects Master Data
 * Centralized data source used across index.html, projects.html, and project.html.
 * Works seamlessly offline via file:// protocol.
 */

const PROJECTS = [
  {
    id: "office-workspace",
    title: "Office Workspace",
    category: "office",
    description: "Modern, productive offices designed around how your team works.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  },
  {
    id: "kitchen-interiors",
    title: "Kitchen Interiors",
    category: "kitchen",
    description: "Functional kitchens with smart storage and timeless finishes.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  },
  {
    id: "home-interiors",
    title: "Home Interiors",
    category: "home",
    description: "Warm, elegant homes tailored to the way you live.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  },
  {
    id: "living-spaces",
    title: "Living Spaces",
    category: "living",
    description: "Bright, comfortable living rooms made for family and guests.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  },
  {
    id: "dining-interiors",
    title: "Dining Interiors",
    category: "dining",
    description: "Inviting dining areas that turn every meal into an occasion.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  },
  {
    id: "work-study-spaces",
    title: "Work & Study Spaces",
    category: "work-study",
    description: "Focused, well-lit corners built for work and study.",
    images: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png"]
  }
];

/**
 * Returns the base folder path for a given project ID
 */
const projectBase = id => `assets/projects/${id}/`;

/**
 * Returns the cover image path for a given project object
 */
const projectCover = p => projectBase(p.id) + "cover.png";
