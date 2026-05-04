function sendForm(event) {
    event.preventDefault();
    alert("Zgłoszenie wysłane! Skontaktujemy się 😊");
}

function togglePanel() {
    const panel = document.getElementById("parentPanel");
    panel.classList.toggle("hidden");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
