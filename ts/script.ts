// global variable who need in the project for all and rendering!
let url = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url
let currentPokemonAsJson: any;
let found: boolean = true; //found a other pokemon?
let counterRequestFailToApi: number = 0;

//to fetch poke api values
async function getPokemonValueByApi(x: number) {
   let response;
   try {
      response = await fetch(url + x.toString());
      return (currentPokemonAsJson = await response.json());
      console.log(`Request ok with number ${x}`);
   } catch {
      errorFunction(x, response);
   }
}

async function errorFunction(x: number, response: any) {
   counterRequestFailToApi++;
   currentPokemonAsJson = { id: x, status: "fail" };
   if (counterRequestFailToApi >= 5) {
      found = false;
      console.log(
         `Request to API was stop, you had min.${counterRequestFailToApi} fail request`
      );
   }
   console.log(`Request not OK with number ${x}`);
}

//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
   for (let i = 906; found === true; i++) {
      await getPokemonValueByApi(i);

      if (currentPokemonAsJson["status"] == "fail") {
         let pokemonId: number = parseInt(currentPokemonAsJson["id"]);
         let pokemonName: string = "notfound";
      } else if (currentPokemonAsJson != null) {
         let pokemonId: number = parseInt(currentPokemonAsJson["id"]);
         let pokemonName: string = currentPokemonAsJson["name"];
         let pokemonImage: string =
            currentPokemonAsJson["sprites"]["front_shiny"];
         found = true;
         console.log(i);
      } else {
         found = false;
      }
   }
}

//go start rendering
async function init() {
   greatCurrentPokemonValuesFromApi();
}
