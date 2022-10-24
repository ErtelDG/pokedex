"use strict";
//HIER DATEN HOLDEN FÜR BIG CARDS NOCH ÜBERARBEITEN!!
//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
    for (let i = currentPokemon; i <= intermediateValue; i++) {
        await getPokemonValueByApi(currentPokemon, url1);
        await getPokemonValueByApi(currentPokemon, url2);
        currentPokemon++;
        savePokemonLocal(i);
        //      renderSmallPokemonCard(i);
    }
    intermediateValue = intermediateValue + 181;
}
//Hier weiter machen!!!!
function showBigPokemonCard(i) {
    alert(i);
}
//go start rendering
async function init() {
    clearContainerWithSmallPokemonCards();
    await loadPokemonBaseJSON();
    await sortPokemonToGeneration();
    renderSmallPokemonCard(1);
}
async function renderSearchList(generation) {
    if (pokemonsSearchId != null) {
        pokemonsSearchId.innerHTML = " ";
        let startFirstObject = generation[Object.keys(generation)[0]];
        for (let i = startFirstObject["pokemonId"]; i < startFirstObject["pokemonId"] + Object.keys(generation).length; i++) {
            const pokemonName = await generation[i]["pokemonName"];
            pokemonsSearchId.innerHTML += `<option value="${pokemonName[0].toUpperCase() + pokemonName.slice(1)}">`;
        }
    }
}
