import { head, adds, chouse } from "../animation/animation.js";

const header = document.querySelector(".header__svg");
const headerImg = document.querySelector(".header__img");
const chousingUs = document.querySelector(".chousing__us");

header.addEventListener("click", head);
headerImg.addEventListener("click", adds);
chousingUs.addEventListener("click", chouse);
export { header,headerImg ,chousingUs};