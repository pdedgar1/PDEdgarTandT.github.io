// Navigation — relative paths work on both GitHub Pages and file:// protocol
const SECTIONS = ['cv', 'teaching', 'research', 'freelance', 'writing'];

// Strip index.html, split on /, drop empty segments
const pathSegments = window.location.pathname
  .replace(/\/?index\.html$/, '')
  .split('/')
  .filter(Boolean);

// The last path segment tells us which section we're in
const currentDir = pathSegments[pathSegments.length - 1] || '';
const inSection  = SECTIONS.includes(currentDir);
const base       = inSection ? '../' : './';

const navigation = [
  { title: "Home",      url: base },
  { title: "CV",        url: base + "cv/" },
  { title: "Teaching",  url: base + "teaching/" },
  { title: "Research",  url: base + "research/" },
  { title: "Freelance", url: base + "freelance/" },
];

const toolbar = document.getElementById("toolbar");
if (toolbar) {
  navigation.forEach(({ title, url }) => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    // Mark active link
    const isHome   = title === "Home" && !inSection;
    const isActive = isHome || (title !== "Home" && currentDir === title.toLowerCase());
    if (isActive) a.classList.add("active");

    toolbar.appendChild(a);
  });
}
