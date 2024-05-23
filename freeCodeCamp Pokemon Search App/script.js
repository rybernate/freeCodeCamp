// JS for rybernate's Solution to Build a Pokemon Search App (freeCodeCamp) 
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const contentMain = document.getElementById("content-1");
const contentFoot = document.getElementById("content-footer");
const contentStats = document.getElementById("content-2");
const pokemonAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const fetchData = async () => {
  clearPrevious();
  let findPokemon = pokemonAPI + searchInput.value.toLowerCase();
  searchInput.value = "";
  try {
    const res = await fetch(findPokemon);
    const data = await res.json();
    displayPokemon(data);
  } catch (err) {
    console.log(err);
    alert("Pokémon not found");
  }
  return;
};

const displayPokemon = (data) => {
  const { name, id, weight, height, types, stats, sprites } = data;


  contentMain.innerHTML = `<div id="image"><img src="${sprites.front_default}" id="sprite" alt="${name}" /></div>`;
  image.style.backgroundImage = "";
  image.style.background = "var(--imageBgd)";
  image.style.border = "1px solid blue";
  contentFoot.innerHTML = `<div id="light-6"></div>
      <div id="cf-spacer">
        <div id="pokemon-id">#${id}</div>:
        <div id="pokemon-name">${name.toUpperCase()}</div>
      </div>
      <div id="speaker">
        <div id="s1"></div>
        <div id="s2"></div>
        <div id="s3"></div>
        <div id="s4"></div>
      </div>`;
  contentStats.innerHTML = `<div id="types">${types.map(type => {return "<div id=\"type\" class=\"stats-types " + type.type.name.toLowerCase() + "\">" + type.type.name.toUpperCase() + "</div>"}).join("")}</div>
  <span class="stats">Weight: <div id="weight">${weight}</div></span>
  <span class="stats">Height: <div id="height">${height}</div></span>
  <span class="stats">HP: <div id="hp">${stats[0].base_stat}</div></span>
  <span class="stats">Attack: <div id="attack">${stats[1].base_stat}</div></span>
  <span class="stats">Defense: <div id="defense">${stats[2].base_stat}</div></span>
  <span class="stats">Special Attack: <div id="special-attack">${stats[3].base_stat}</div></span>
  <span class="stats">Special Defense: <div id="special-defense">${stats[4].base_stat}</div></span>
  <span class="stats">Speed: <div id="speed">${stats[5].base_stat}</div></span>`;
  return;
};

const clearPrevious = () => {
  contentMain.innerHTML = `
      <div id="image">
        </div>`;
  image.style.backgroundImage = `radial-gradient(
    farthest-corner at 10px 10px, black 65%,
    gray 100%)`;
  image.style.background = "";
  image.style.border = "1px solid black";
  contentFoot.innerHTML = `<div id="light-6"></div>
      <div id="cf-spacer">
      </div>
      <div id="speaker">
        <div id="s1"></div>
        <div id="s2"></div>
        <div id="s3"></div>
        <div id="s4"></div>
      </div>`;
  contentStats.innerHTML = ``; 
};

searchBtn.addEventListener("click", fetchData);
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {fetchData();}
});