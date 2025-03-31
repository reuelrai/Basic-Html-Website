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

//text change
const element = document.querySelector(".text-change");

element.addEventListener("mouseover", () => {
    element.textContent = "An absolute beginner in web development";
});

element.addEventListener("mouseout", () => {
    element.textContent = "-- A Frontend Developer --";
});
