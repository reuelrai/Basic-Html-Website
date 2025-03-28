// Retrieve theme from localStorage or default to dark
const theme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', theme);

const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

// Set initial icon visibility
if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
} else {
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Save theme change

    // Toggle icons
    if (newTheme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
}

document.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
