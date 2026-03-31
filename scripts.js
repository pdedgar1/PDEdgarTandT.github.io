// Navigation items — uses root-relative paths for GitHub Pages / custom domain
const navigation = [
  { title: "Home",      url: "/" },
  { title: "CV",        url: "/cv/" },
  { title: "Teaching",  url: "/teaching/" },
  { title: "Research",  url: "/research/" },
  { title: "Freelance", url: "/freelance/" },
];

const toolbar = document.getElementById("toolbar");
if (toolbar) {
  const path = window.location.pathname.replace(/\/index\.html$/, "/");

  navigation.forEach(({ title, url }) => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    // Mark active link
    const isHome = url === "/" && (path === "/" || path === "");
    const isActive = isHome || (url !== "/" && path.startsWith(url));
    if (isActive) a.classList.add("active");

    toolbar.appendChild(a);
  });
}
