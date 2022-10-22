//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
   for (let i = currentPokemon; i <= maxPokemons; i++) {
      await getPokemonValueByApi(currentPokemon, url1);
      console.log(
         "await getPokemonValueByApi(currentPokemon, url1); erfolgreich"
      );
      await getPokemonValueByApi(currentPokemon, url2);
      console.log(
         "await getPokemonValueByApi(currentPokemon, url2); erfolgreich"
      );
      currentPokemon++;

      if (
         url1responseCurrentPokemonAsJson != null &&
         url1responseCurrentPokemonAsJson["status"] != "fail" &&
         found == true
      ) {
         // pokemonID
         let pokemonId: string = url1responseCurrentPokemonAsJson["id"];
         // pokemon name
         let pokemonName: string = url1responseCurrentPokemonAsJson["name"];
         //pokemon image
         let pokemonImage: string =
            url1responseCurrentPokemonAsJson["sprites"]["other"][
               "official-artwork"
            ]["front_default"];
         // pokemon types 1 of 2  for show at card !
         let pokemonType1: string[] =
            url1responseCurrentPokemonAsJson["types"][0]["type"]["name"];
         // pokemon types 2 of 2  for show at card !
         let pokemonType2: string[] =
            url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
         // pokemon color for card background color and font color
         let color: string = url2responseCurrentPokemonAsJson["color"];
         // pokemon generation
         let pokemonGeneration: string =
            url2responseCurrentPokemonAsJson["generation"]["name"];
         //pokemon weight
         let pokemonWeight: string = (
            parseInt(url1responseCurrentPokemonAsJson["weight"]) / 10
         ).toString();
         // pokemon height
         let pokemonHeight: string = (
            parseInt(url1responseCurrentPokemonAsJson["height"]) / 10
         ).toString();
         //pokemon abilities 1 of 2!
         let pokemonAbilitie1: string =
            url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"];
         //pokemon abilities 2 of 2!
         let pokemonAbilitie2: string =
            url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
         //pokemon flavor
         let flavorPokemon: string =
            url2responseCurrentPokemonAsJson["flavor_text_entries"][0];
         //pokemon hp
         let pokemonHP: string =
            url1responseCurrentPokemonAsJson["stats"][0][
               "base_stat"
            ].toString();
         //pokemon attack
         let pokemonAtk =
            url1responseCurrentPokemonAsJson["stats"][1][
               "base_stat"
            ].toString();
         //pokemon defence
         let pokemonDef =
            url1responseCurrentPokemonAsJson["stats"][2][
               "base_stat"
            ].toString();
         //pokemon special attack
         let pokemonSatk =
            url1responseCurrentPokemonAsJson["stats"][3][
               "base_stat"
            ].toString();
         //pokemon special defence
         let pokemonSdef =
            url1responseCurrentPokemonAsJson["stats"][4][
               "base_stat"
            ].toString();
         //pokemon speed
         let pokemonSpd =
            url1responseCurrentPokemonAsJson["stats"][5][
               "base_stat"
            ].toString();
         console.log(i);
         console.log("ID", pokemonId);
         console.log("PokeName", pokemonName);
         console.log("PokeImage", pokemonImage);
         
      } else {
         found = false;
      }
   }
}

//go start rendering
async function init() {
   greatCurrentPokemonValuesFromApi();
}
