// global variable who need in the project for all and rendering!
let url = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url
let currentPokemonAsJson: any;
let found: boolean = true; //found a other pokemon?

//to fetch poke api values
async function getPokemonValueByApi(x: number) {
   let response = await fetch(url + x.toString()).catch((found = false));

   return (currentPokemonAsJson = await response.json());
}

//greated data values we need for the current pokmon from the api
async function greatCurrentPokemonValuesFromApi() {
   for (let i = 905; found === true; i++) {
      await getPokemonValueByApi(i);

      if (currentPokemonAsJson != null) {
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
