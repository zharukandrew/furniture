import { header,headerImg ,chousingUs} from "../script.js";
const head = () => {
    header.classList.toggle("magazin");
 }
 const adds = () => {
     headerImg.classList.toggle("add");
 }
 const chouse = () => {
     chousingUs.classList.toggle("magazin");
 }
 
 export { head, adds, chouse };