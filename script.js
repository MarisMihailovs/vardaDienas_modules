import { Dati } from "./vardadienas.js";

const uzruna = document.querySelector('#uzruna');
const vardi = document.querySelector('#vardi');
const d = new Date();
const month = d.getMonth();
const date = d.getDate();

console.log(d);
console.log(month, date);
console.log(Dati);

vardi.innerText = Dati[month][date - 1] + "!";



