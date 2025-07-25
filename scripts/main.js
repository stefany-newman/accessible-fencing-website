/* If width is larger than 768, move CTA to the end of the navigation. */

const navList = document.querySelector("#main-navigation");
const cta = navList.querySelector(".trial-lesson");
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  navList.append(cta);
}