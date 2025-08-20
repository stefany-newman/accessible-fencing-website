/* Thank you for your message. */

const formHeader = document.querySelector("#contact-us-form-h");
const form = document.querySelector("form");
const formInstructions = document.querySelector("#form-instructions");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    formHeader.textContent = "Thank you for your message. We will get back to you as soon as possible.";
    form.style.display = "none";
    formInstructions.style.display = "none";
    formHeader.focus();
});
