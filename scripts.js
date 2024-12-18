// Navigation items
const navigation = [
    { title: "Home", url: "/index.html" },
    { title: "Teaching", url: "/teaching/index.html" },
    { title: "Research", url: "/research/index.html" },
    { title: "Writing", url: "/writing/index.html" },
    { title: "Freelance", url: "/freelance/index.html" },
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
