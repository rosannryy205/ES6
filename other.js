
//for in & for of
// const cars = ['BMW', 'Honda', 'Toyota'];

// const object= {
//       name: 'khanh',
//       age: 19,
//       major: 'web design',
// };

// for (let x in object){
//       console.log(object[x]);
// }


// function fetchKantoPokemon(){
//   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//   .then(response => response.json())
//   .then(allpokemon => {
//     let pokemons = allpokemon.results;
//     pokemons = random(pokemons);
//     show(pokemons);
//   });
// }

// function random(array) {
//     return array.sort(()=>Math.random()-0.5);
// }

// function show(pokemons) {
//   const container = document.getElementById('pokemon');
//   container.innerHTML = ''; 

//   pokemons.forEach(pokemons => {
//       const card = document.createElement('div');
//       card.classList.add('card');
//       card.textContent = pokemons.name; 
//       container.appendChild(card);
//   });
// }

// fetchKantoPokemon();

// function callAPI(){
//   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//   .then(response => response.json())
//   .then( allpokemon => {
//     let pokemon = allpokemon.results;
//     pokemon= random(pokemon);
//     show(pokemon);
//   })
// }

// function random(array){
//   return array.sort(()=>Math.random()-0.5);
// }

// function show(pokemon){
//   const container = document.getElementById('pokemon');
//   container.innerHTML='';

//   pokemon.forEach(pokemon =>{
//     let card= document.createElement('div');
//     card.classList.add('card');
//     card.textContent=pokemon.name;
//     container.appendChild(card);
//   })
// }

// callAPI();
// function callAPI(){
//       fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
//       .then(response=>response.json())
//       .then(allpokemons=>{
//             let pokemon= allpokemons.results;
//             pokemon= random(pokemon);
//             show(pokemon)
//       })
// }

// function random(array){
//       return array.sort(()=>Math.random()-0.5);
// }
// function show(pokemon){
//       const container= document.getElementById("pokemon")
//       container.innerHTML='';

//       pokemon.forEach(pokemon=>{
//             let card=document.createElement("div")
//             card.classList.add("card");
//             card.textContent=pokemon.name;
//             container.appendChild(card);
//       })
// }

// callAPI();

import{fetchData} from "./fetch.js";

fetchData();

console.log("1234")