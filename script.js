// import { head } from "../animation/animation.js";


import { head,adds } from "../animation/animation.js";

const header = document.querySelector(".header__svg");
const headerImg = document.querySelector(".header__img")

header.addEventListener("click", head);
headerImg.addEventListener("click",adds)

export { header,headerImg }; // <-- Export the 'header' variable