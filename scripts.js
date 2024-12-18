// Navigation items
const navigation = [
    { title: "Home", url: "/pdedgartandt.github.io/index.html" },
    { title: "Teaching", url: "/pdedgartandt.github.io/teaching.html" },
    { title: "Research", url: "/pdedgartandt.github.io/research.html" },
    { title: "Writing", url: "/pdedgartandt.github.io/writing.html" },
    { title: "Freelance", url: "/pdedgartandt.github.io/freelance.html" },
];

// Get the toolbar element
const toolbar = document.getElementById('toolbar');

// Generate navigation links
navigation.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.title;
    li.appendChild(a);
    toolbar.appendChild(li);
});
