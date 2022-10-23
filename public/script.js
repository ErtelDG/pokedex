"use strict";
//clear container with small pokemon cards
function clearContainerWithSmallPokemonCards() {
    if (containerRenderAllPokemonSmall != null) {
        containerRenderAllPokemonSmall.innerHTML = " ";
    }
}
//to fetch poke api values
async function getPokemonValueByApi(currentPokemon, urlApi) {
    try {
        let response;
        response = await fetch(urlApi + currentPokemon.toString());
        if (urlApi == "https://pokeapi.co/api/v2/pokemon/") {
            url1responseCurrentPokemonAsJson = await response.json();
        }
        else {
            url2responseCurrentPokemonAsJson = await response.json();
        }
    }
    catch {
        errorFunction(currentPokemon);
    }
}
async function errorFunction(currentPokemon) {
    counterRequestFailToApi++;
    url1responseCurrentPokemonAsJson = {
        id: currentPokemon,
        status: "fail",
    };
    if (counterRequestFailToApi >= 4) {
        found = false;
        maxPokemons = currentPokemon;
        console.warn(`Request to API was stop by number ${currentPokemon}, you had min.${counterRequestFailToApi} fail request. Try again later.`);
    }
    else {
        console.warn(`Request not OK with number ${currentPokemon}, you have at the moment min.${counterRequestFailToApi} fail request.`);
    }
}
// pokemon save local
function savePokemonLocal(i) {
    if (url1responseCurrentPokemonAsJson != null &&
        url1responseCurrentPokemonAsJson["status"] != "fail" &&
        found == true) {
        createPokemonLocal(i, url1responseCurrentPokemonAsJson, url2responseCurrentPokemonAsJson);
    }
    else {
        found = false;
    }
}
//creat pokemon card at values api
function createPokemonLocal(i, url1responseCurrentPokemonAsJson, url2responseCurrentPokemonAsJson) {
    let type2Value = checkType2Exists(url1responseCurrentPokemonAsJson);
    let abilitie2Value = checkAbilitie2Exists(url1responseCurrentPokemonAsJson);
    let type1ValueForColor = setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson);
    return (localPokemonsData[i] = new PokemonCard(url1responseCurrentPokemonAsJson["id"], url1responseCurrentPokemonAsJson["name"], url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"], url1responseCurrentPokemonAsJson["types"][0]["type"]["name"], type1ValueForColor, url2responseCurrentPokemonAsJson["generation"]["name"], parseInt(url1responseCurrentPokemonAsJson["weight"]) / 10, parseInt(url1responseCurrentPokemonAsJson["height"]) / 10, url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"], url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"], url1responseCurrentPokemonAsJson["stats"][0]["base_stat"], url1responseCurrentPokemonAsJson["stats"][1]["base_stat"], url1responseCurrentPokemonAsJson["stats"][2]["base_stat"], url1responseCurrentPokemonAsJson["stats"][3]["base_stat"], url1responseCurrentPokemonAsJson["stats"][4]["base_stat"], url1responseCurrentPokemonAsJson["stats"][5]["base_stat"], type2Value, abilitie2Value));
}
function checkType2Exists(url1responseCurrentPokemonAsJson) {
    let type2Value = "undefined";
    if (url1responseCurrentPokemonAsJson["types"].length > 1) {
        type2Value = url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
    }
    return type2Value;
}
function checkAbilitie2Exists(url1responseCurrentPokemonAsJson) {
    let abilitie2Value = "undefined";
    if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
        abilitie2Value =
            url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
    }
    return abilitie2Value;
}
function setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson) {
    let type1ValueForColor = "undefined";
    switch (url1responseCurrentPokemonAsJson["types"][0]["type"]["name"]) {
        case "rock":
            type1ValueForColor = "#B69E31";
            break;
        case "ghost":
            type1ValueForColor = "#70559B";
            break;
        case "steel":
            type1ValueForColor = "#B7B9D0";
            break;
        case "water":
            type1ValueForColor = "#6493EB";
            break;
        case "grass":
            type1ValueForColor = "#74CB48";
            break;
        case "psychic":
            type1ValueForColor = "#FB5584";
            break;
        case "ice":
            type1ValueForColor = "#9AD6DF";
            break;
        case "dark":
            type1ValueForColor = "#75574C";
            break;
        case "fairy":
            type1ValueForColor = "#E69EAC";
            break;
        case "normal":
            type1ValueForColor = "#AAA67F";
            break;
        case "fighting":
            type1ValueForColor = "#C12239";
            break;
        case "flying":
            type1ValueForColor = "#A891EC";
            break;
        case "poison":
            type1ValueForColor = "#A43E9E";
            break;
        case "ground":
            type1ValueForColor = "#DEC16B";
            break;
        case "bug":
            type1ValueForColor = "#A7B723";
            break;
        case "fire":
            type1ValueForColor = "#F57D31";
            break;
        case "electric":
            type1ValueForColor = "#F9CF30";
            break;
        case "dragon":
            type1ValueForColor = "#7037FF";
            break;
        default:
            type1ValueForColor = "#000000";
            break;
    }
    return type1ValueForColor;
}
function renderSmallPokemonCard(i) {
    if (containerRenderAllPokemonSmall != null) {
        containerRenderAllPokemonSmall.innerHTML += `
         <div name="show-pokemon-card"
                  class="flex flex-col  w-26 h-28 my-2 mx-2 bg-white border border-solid border-r-05rem shadow-s cursor-pointer" style="border-color: ${localPokemonsData[i]["color"]};">
                  <div name="pokemon-number" class="w-full h-4 flex justify-end">
                     <div name="number-text"
                        class="font-normal text-xxs flex justify-center text-right px-1" style="color:${localPokemonsData[i]["color"]}" >#${localPokemonsData[i]["pokemonId"]}
                     </div>
                  </div>
                  <div name="pokemon-image" class="flex justify-center w-full h-18"><img class="w-18 h-18"
                        name="poke-img" src=${localPokemonsData[i]["pokemonImage"]}></div>
                  <div name="pokemon-name"
                     class="w-full h-full flex text-white justify-center items-center text-center border-r-bottom-05rem" style=background-color:${localPokemonsData[i]["color"]}>
                     <div name="name-text" class="font-normal text-xxs flex items-center text-center">${localPokemonsData[i].pokemonName[0].toUpperCase(1) +
            localPokemonsData[i].pokemonName.slice(1)}</div>
                  </div>
               </div>
         `;
    }
}
