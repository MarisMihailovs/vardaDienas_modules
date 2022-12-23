import { Dati } from "./vardadienas.js";

const uzruna = document.querySelector('#uzruna');
const vardi = document.querySelector('#vardi');
const datums = document.querySelector('#datums')
const d = new Date();
const month = d.getMonth();
const date = d.getDate();
const year = d.getFullYear()

console.log(d);
console.log(date + "-" + month + "-" + year);
console.log(Dati);

vardi.innerText = Dati[month][date - 1] + "!";
datums.innerText = date + "-" + month + "-" + year;



