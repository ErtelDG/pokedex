"use strict";
//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
    for (let i = currentPokemon; i <= maxPokemons; i++) {
        await getPokemonValueByApi(currentPokemon, url1);
        await getPokemonValueByApi(currentPokemon, url2);
        currentPokemon++;
        savePokemonLocal(i);
        renderSmallPokemonCard(i);
    }
}
//go start rendering
async function init() {
    clearContainerWithSmallPokemonCards();
    greatCurrentPokemonValuesFromApi();
}
