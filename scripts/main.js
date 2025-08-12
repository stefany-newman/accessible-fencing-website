/* If width is larger than 768, move CTA to the end of the navigation. */

const navList = document.querySelector("#main-navigation");
const cta = navList.querySelector(".trial-lesson");
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  navList.append(cta);
}

/* Thank you for your message. */

const formHeader = document.querySelector("#form-header");
const form = document.querySelector("form");
const formInstructions = document.querySelector("#form-instructions");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
    formHeader.textContent = "Thank you for your message. We will get back to you as soon as possible.";
    form.style.display = "none";
    formInstructions.style.display = "none";
    formHeader.focus();
});