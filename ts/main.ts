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
async function showBigPokemonCard(idPokemon: number) {
   await getPokemonValueByApi(idPokemon, url1);
   await getPokemonValueByApi(idPokemon, url2);

   let type2 = "undefined";
   let abilities2 = "undefined";

   if (url1responseCurrentPokemonAsJson["types"].length > 1) {
      type2 = url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
   }
   if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
      abilities2 =
         url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
   }
   let renderBigPokemonCard = new PokemonCard(
      url2responseCurrentPokemonAsJson["id"],
      url2responseCurrentPokemonAsJson["name"],
      url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"][
         "front_default"
      ],
      url1responseCurrentPokemonAsJson["types"][0]["type"]["name"],
      url2responseCurrentPokemonAsJson["color"]["name"],
      url2responseCurrentPokemonAsJson["generation"]["name"],
      url1responseCurrentPokemonAsJson["weight"] / 10,
      url1responseCurrentPokemonAsJson["height"] / 10,
      url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"],
      url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"],
      url1responseCurrentPokemonAsJson["stats"][0]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][1]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][2]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][3]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][4]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][5]["base_stat"],
      type2,
      abilities2
   );




































   

   console.log(renderBigPokemonCard.pokemonType2);
   console.log(renderBigPokemonCard.pokemonAbilitie2);
}

//go start rendering
async function init() {
   clearContainerWithSmallPokemonCards();
   await loadPokemonBaseJSON();
   await sortPokemonToGeneration();
   renderSmallPokemonCard(1);
   loadPokemonNamesInArray();
}

//Liste für Data List! Notwendig noch?
//
// async function renderSearchList(generation: any) {
//    if (pokemonsSearchId != null) {
//       pokemonsSearchId.innerHTML = " ";
//       let startFirstObject = generation[Object.keys(generation)[0]];
//       for (
//          let i = startFirstObject["pokemonId"];
//          i < startFirstObject["pokemonId"] + Object.keys(generation).length;
//          i++
//       ) {
//          const pokemonName = await generation[i]["pokemonName"];
//          pokemonsSearchId.innerHTML += `<option value="${
//             pokemonName[0].toUpperCase() + pokemonName.slice(1)
//          }">`;
//       }
//    }
// }
