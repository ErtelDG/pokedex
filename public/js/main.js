"use strict";
/**
 *
 * greated data values we need for the current pokmon from the api
 */
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
/**
 * show big Pokemon Card
 * @param idPokemon => selected the pokemon with the id
 *
 */
async function showBigPokemonCard(idPokemon) {
    await getPokemonValueByApi(idPokemon, url1);
    await getPokemonValueByApi(idPokemon, url2);
    let type2 = await checkType2();
    let abilities2 = await checkAbilities2();
    let color2 = await checkColorForType2(type2);
    let flavorNewFixed = await fixFormatBugByApiInFlavor();
    let color = setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson, 0);
    let renderBigPokemonCard = await createAPokemonObject(url1responseCurrentPokemonAsJson, url2responseCurrentPokemonAsJson, color, flavorNewFixed, type2, abilities2, color2);
    renderBigCard(renderBigPokemonCard);
    setAllUndefinedStatsDisplayNone(renderBigPokemonCard);
    setOverflowHiddenBody();
}
/**
 * go start rendering
 *
 */
async function init() {
    clearContainerWithSmallPokemonCards();
    await loadPokemonBaseJSON();
    await sortPokemonToGeneration();
    renderSmallPokemonCard(1);
    loadPokemonNamesInArray();
}
/**
 * function => close big pokemon card
 *
 */
function closeBigCard() {
    let renderContainBigCard = document.getElementById("renderBigPokemon");
    if (renderContainBigCard != null) {
        renderContainBigCard.innerHTML = " ";
    }
    let bodyElement = document.getElementById("bodyElement");
    if (bodyElement != null) {
        bodyElement.classList.remove("overflow-hidden");
    }
}
/**
 * search a special pokemon in the complete data base
 *
 */
let searchPokemonId;
async function showBigPokemonCardBySearch() {
    const input = document.getElementById("myInput");
    if (input != null) {
        let searchPokemon = input.value.toLowerCase();
        let response = await fetch(url1 + searchPokemon);
        let searchPokemonToJson = await response.json();
        searchPokemonId = searchPokemonToJson["id"];
        showBigPokemonCard(searchPokemonId);
        input.value = "";
    }
}
