// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

// Apply the saved theme or default to light
document.documentElement.setAttribute("data-theme", currentTheme);
themeToggle.textContent = currentTheme === "dark" ? "Light Mode" : "Dark Mode";

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";
});

// GSAP Animations
gsap.from(".hero .avatar", {
    duration: 1.5,
    opacity: 0,
    y: -50,
    ease: "bounce.out",
});

gsap.from(".hero .animated-name", {
    duration: 1.5,
    opacity: 0,
    x: -100,
    ease: "power2.out",
    delay: 0.5,
});

gsap.from(".hero p", {
    duration: 1.5,
    opacity: 0,
    x: 100,
    ease: "power2.out",
    delay: 0.7,
});

gsap.from(".hero .btn", {
    duration: 1.5,
    opacity: 0,
    scale: 0,
    ease: "back.out(1.7)",
    delay: 1,
});

// Scroll Animations for Sections
gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section enters the viewport
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power1.out",
    });
});
