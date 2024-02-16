
import { header,headerImg } from "../script.js"; // <-- Import the 'header' variable
const head = () => {
   header.classList.toggle("magazin");
}
const adds = ()=>{
    headerImg.classList.toggle("add");
}
export { head , adds};