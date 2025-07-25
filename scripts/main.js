const navList = document.querySelector("#main-navigation");
const listItems = navList.querySelectorAll("li");
const ctaReal = navList.querySelector(".trial-lesson");
const listItemsArray = Array.from(listItems);

console.log(listItemsArray);
const cta = listItemsArray[1];

console.log(cta);

//navList.removeChild(ctaReal);
navList.append(ctaReal);

