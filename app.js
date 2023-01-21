import _html from "./dom.js";
const main = document.querySelector("main")
/**
 * fetch data 
 */

let dataFetched = [];
const fetchData = async ()=>{
   const res = await fetch('data.json');
   const data = await res.json();
   data.map((v,i)=>main.innerHTML += _html(v))
}

fetchData()