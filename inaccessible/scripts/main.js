/* Inaccessible scripts */

const formHeader = document.querySelector("#contact-us-form-h");
const form = document.querySelector("form");
const formInstructions = document.querySelector("#form-instructions");

/* Thank you for your message */
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    formHeader.textContent = "Thank you for your message. We will get back to you as soon as possible.";
    form.style.display = "none";
    formInstructions.style.display = "none";
    formHeader.focus();
});

/* Show scrollbar if zoomed in 400% or more, hence breaking 1.4.10 Reflow AA */
window.addEventListener("resize", handleZoom);
handleZoom(); // Initial check on page load
