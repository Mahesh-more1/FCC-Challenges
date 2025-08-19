const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const spriteContainer = document.getElementById("sprite-container");
const typesContainer = document.getElementById("types");

async function searchPokemon() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  clearDisplay();

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!response.ok) throw new Error("Pokémon not found");
    const data = await response.json();
    displayPokemon(data);
  } catch (error) {
    alert("Pokémon not found");
    return;
  }
}

const displayPokemon = (pokemon) => {
  document.getElementById("pokemon-name").textContent =
    pokemon.name.toUpperCase();
  document.getElementById("pokemon-id").textContent = `#${pokemon.id}`;
  document.getElementById("weight").textContent = `Weight: ${pokemon.weight}`;
  document.getElementById("height").textContent = `Height: ${pokemon.height}`;

  document.getElementById("hp").textContent = pokemon.stats[0].base_stat;
  document.getElementById("attack").textContent = pokemon.stats[1].base_stat;
  document.getElementById("defense").textContent = pokemon.stats[2].base_stat;
  document.getElementById("special-attack").textContent =
    pokemon.stats[3].base_stat;
  document.getElementById("special-defense").textContent =
    pokemon.stats[4].base_stat;
  document.getElementById("speed").textContent = pokemon.stats[5].base_stat;

  spriteContainer.innerHTML = "";
  const sprite = document.createElement("img");
  sprite.id = "sprite";
  sprite.src = pokemon.sprites.front_default;
  sprite.alt = pokemon.name;
  spriteContainer.appendChild(sprite);

  typesContainer.innerHTML = "";
  pokemon.types.forEach((type) => {
    const typeElement = document.createElement("div");
    typeElement.textContent = type.type.name.toUpperCase();
    typeElement.className = `type ${type.type.name}`;
    typesContainer.appendChild(typeElement);
  });
};

const clearDisplay = () => {
  spriteContainer.innerHTML = "";
  typesContainer.innerHTML = "";

  document.getElementById("pokemon-name").textContent = "";
  document.getElementById("pokemon-id").textContent = "";
  document.getElementById("weight").textContent = "";
  document.getElementById("height").textContent = "";

  document.getElementById("hp").textContent = "";
  document.getElementById("attack").textContent = "";
  document.getElementById("defense").textContent = "";
  document.getElementById("special-attack").textContent = "";
  document.getElementById("special-defense").textContent = "";
  document.getElementById("speed").textContent = "";
};

searchButton.addEventListener("click", searchPokemon);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchPokemon();
});
