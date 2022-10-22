"use strict";
//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
    for (let i = currentPokemon; i <= maxPokemons; i++) {
        await getPokemonValueByApi(currentPokemon, url1);
        console.log("await getPokemonValueByApi(currentPokemon, url1); erfolgreich");
        await getPokemonValueByApi(currentPokemon, url2);
        console.log("await getPokemonValueByApi(currentPokemon, url2); erfolgreich");
        currentPokemon++;
        if (url1responseCurrentPokemonAsJson != null &&
            url1responseCurrentPokemonAsJson["status"] != "fail" &&
            found == true) {
            // pokemonID
            let pokemonId = url1responseCurrentPokemonAsJson["id"];
            // pokemon name
            let pokemonName = url1responseCurrentPokemonAsJson["name"];
            //pokemon image
            let pokemonImage = url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"];
            // pokemon types for show at card => ARRAY!
            let pokemonType = url1responseCurrentPokemonAsJson["types"];
            // pokemon color for card background color and font color
            let color = url2responseCurrentPokemonAsJson["color"];
            // pokemon generation
            let pokemonGeneration = url2responseCurrentPokemonAsJson["generation"]["name"];
            //pokemon weight
            let pokemonWeight = (parseInt(url1responseCurrentPokemonAsJson["weight"]) / 10).toString();
            // pokemon height
            let pokemonHeight = (parseInt(url1responseCurrentPokemonAsJson["height"]) / 10).toString();
            //pokemon abilities => ARRAY!
            let pokemonMove = url1responseCurrentPokemonAsJson["abilities"];
            //pokemon flavor
            let flavorPokemon = url2responseCurrentPokemonAsJson["flavor_text_entries"][0];
            //pokemon hp
            let pokemonHP = url1responseCurrentPokemonAsJson["stats"][0]["base_stat"].toString();
            //pokemon attack
            let pokemonAtk = url1responseCurrentPokemonAsJson["stats"][1]["base_stat"].toString();
            //pokemon defence
            let pokemonDef = url1responseCurrentPokemonAsJson["stats"][2]["base_stat"].toString();
            //pokemon special attack
            let pokemonSatk = url1responseCurrentPokemonAsJson["stats"][3]["base_stat"].toString();
            //pokemon special defence
            let pokemonSdef = url1responseCurrentPokemonAsJson["stats"][4]["base_stat"].toString();
            //pokemon speed
            let pokemonSpd = url1responseCurrentPokemonAsJson["stats"][5]["base_stat"].toString();
            console.log(i);
            console.log("ID", pokemonId);
            console.log("PokeName", pokemonName);
            console.log("PokeImage", pokemonImage);
            console.log("Type", pokemonType);
        }
        else {
            found = false;
        }
    }
}
//go start rendering
async function init() {
    greatCurrentPokemonValuesFromApi();
}
