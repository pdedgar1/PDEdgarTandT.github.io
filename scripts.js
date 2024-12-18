// Navigation items
const navigation = [
    { title: "Home", url: "https://pdedgar1.github.io/PDEdgarTandT.github.io/index.html" },
    { title: "Teaching", url: "https://pdedgar1.github.io/PDEdgarTandT.github.io/teaching.html" },
    { title: "Research", url: "https://pdedgar1.github.io/PDEdgarTandT.github.io/research.html" },
    { title: "Writing", url: "https://pdedgar1.github.io/PDEdgarTandT.github.io/writing.html" },
    { title: "Freelance", url: "https://pdedgar1.github.io/PDEdgarTandT.github.io//freelance.html" },
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
