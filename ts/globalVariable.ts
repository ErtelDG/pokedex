// global variable who need in the project for all and rendering!
let currentPokemon: number = 1;
let maxPokemons: number = 1;
let url1: string = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url for stats
let url2: string = "https://pokeapi.co/api/v2/pokemon-species/"; //poke api v2 url for generation and color
let url1responseCurrentPokemonAsJson: any;
let url2responseCurrentPokemonAsJson: any;

let found: boolean = true; //found a other pokemon?
let counterRequestFailToApi: number = 0;

// pokemon data save local:
let localPokemonsData: any = {};
