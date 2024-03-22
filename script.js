import { head, adds, chouse ,prod } from "../animation/animation.js";

const header = document.querySelector(".header__svg");

const headerImg = document.querySelector(".header__img");
const chousingUs = document.querySelector(".chousing__us");
const product = document.querySelector(".product h1");

header.addEventListener("click", head);
headerImg.addEventListener("click", adds);
chousingUs.addEventListener("click", chouse);
product.addEventListener("click",prod)

export { header, headerImg, chousingUs ,product };

