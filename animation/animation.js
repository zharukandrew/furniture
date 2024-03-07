import { header,headerImg ,chousingUs,product} from "../script.js";
const head = () => {
    header.classList.toggle("magazin");
 }
 const adds = () => {
     headerImg.classList.toggle("add");
 }
 const chouse = () => {
     chousingUs.classList.toggle("magazin");
 }
 const prod = () =>{
    product.classList.toggle("magazin");
 }
 export { head, adds, chouse ,prod };
