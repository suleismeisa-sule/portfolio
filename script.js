// Smooth scroll effect (optional enhancement)
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Contact form alert
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Message sent successfully! ✅");

        form.reset();
    });
}