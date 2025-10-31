alert("welcome to my portfolio");// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Dark/Light mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = "☀ Light Mode";
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = "☀ Light Mode";
}

// Dark mode CSS
const style = document.createElement('style');
style.textContent = `
.dark-mode {
    background-color: #222;
    color: #f9f9f9;
}
.dark-mode header, 
.dark-mode footer {
    background-color: #111;
}
.dark-mode .hero {
    background-color: #444;
}
.dark-mode .project-card {
    background-color: #333;
}
`;
document.head.appendChild(style);

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = "⬆ Top";
backToTop.style.position = "fixed";
backToTop.style.bottom = "70px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.display = "none";
backToTop.style.borderRadius = "5px";
backToTop.style.border = "none";
backToTop.style.cursor = "pointer";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show button when scroll down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
