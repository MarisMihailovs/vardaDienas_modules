import { Dati } from "./vardadienas.js";

const vardi = document.querySelector('#vardi');
const datums = document.querySelector('#datums')
const d = new Date();
const month = d.getMonth() + 1;
const date = d.getDate();
const year = d.getFullYear()

console.log(d);
console.log(date + "-" + month + "-" + year);
console.log(Dati);

vardi.innerText = Dati[month - 1][date - 1];
datums.innerText = `${date}-${month}-${year}`;



