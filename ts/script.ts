//to fetch poke api values
async function getPokemonValueByApi(currentPokemon: number, urlApi: string) {
   try {
      let response;
      response = await fetch(urlApi + currentPokemon.toString());

      if (urlApi == "https://pokeapi.co/api/v2/pokemon/") {
         url1responseCurrentPokemonAsJson = await response.json();
      } else {
         url2responseCurrentPokemonAsJson = await response.json();
      }
   } catch {
      errorFunction(currentPokemon);
   }
}

async function errorFunction(currentPokemon: number) {
   counterRequestFailToApi++;
   url1responseCurrentPokemonAsJson = {
      id: currentPokemon,
      status: "fail",
   };
   if (counterRequestFailToApi >= 4) {
      found = false;
      maxPokemons = currentPokemon;
      console.warn(
         `Request to API was stop by number ${currentPokemon}, you had min.${counterRequestFailToApi} fail request. Try again later.`
      );
   } else {
      console.warn(
         `Request not OK with number ${currentPokemon}, you have at the moment min.${counterRequestFailToApi} fail request.`
      );
   }
}
