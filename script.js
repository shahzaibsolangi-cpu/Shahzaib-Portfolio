// Dark Mode

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "🌙";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "12px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "50%";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.fontSize = "18px";

document.body.appendChild(darkModeButton);


darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {
    observer.observe(section);
});
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});