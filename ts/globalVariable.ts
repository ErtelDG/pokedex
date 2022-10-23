// global variable who need in the project for all and rendering!
let currentPokemon: number = 1;
let maxPokemons: number = 20;

//ulr´s api
let url1: string = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url for stats
let url2: string = "https://pokeapi.co/api/v2/pokemon-species/"; //poke api v2 url for generation and color

//response api save here as json
let url1responseCurrentPokemonAsJson: any;
let url2responseCurrentPokemonAsJson: any;

//variable for fail requests
let found: boolean = true; //found a other pokemon?
let counterRequestFailToApi: number = 0;

// pokemon data save local:
let localPokemonsData: any = {};

//variable for render contains
//contain for small pokemon cards
let containerRenderAllPokemonSmall = document.getElementById(
   "renderAllPokemonSmall"
);
//container for big pokemon cards

// => PLACEHOLDER!!!!!!!!!!!!!!!!!!!!!!!!

// pokemon class
class PokemonCard {
   pokemonId!: number;
   pokemonName!: string;
   pokemonImage!: string;
   pokemonType1!: string;
   color!: string;
   pokemonGeneration!: string;
   pokemonWeight!: number;
   pokemonHeight!: number;
   pokemonAbilitie1!: string;
   flavorPokemon!: string;
   pokemonHP!: number;
   pokemonAtk!: number;
   pokemonDef!: number;
   pokemonSatk!: number;
   pokemonSdef!: number;
   pokemonSpd!: number;
   pokemonType2?: string;
   pokemonAbilitie2?: string;

   constructor(
      pokemonId: number,
      pokemonName: string,
      pokemonImage: string,
      pokemonType1: string,
      color: string,
      pokemonGeneration: string,
      pokemonWeight: number,
      pokemonHeight: number,
      pokemonAbilitie1: string,
      flavorPokemon: string,
      pokemonHP: number,
      pokemonAtk: number,
      pokemonDef: number,
      pokemonSatk: number,
      pokemonSdef: number,
      pokemonSpd: number,
      pokemonType2?: string,
      pokemonAbilitie2?: string
   ) {
      this.pokemonId = pokemonId;
      this.pokemonName = pokemonName;
      this.pokemonImage = pokemonImage;
      this.pokemonType1 = pokemonType1;
      this.color = color;
      this.pokemonGeneration = pokemonGeneration;
      this.pokemonWeight = pokemonWeight;
      this.pokemonHeight = pokemonHeight;
      this.pokemonAbilitie1 = pokemonAbilitie1;
      this.flavorPokemon = flavorPokemon;
      this.pokemonHP = pokemonHP;
      this.pokemonAtk = pokemonAtk;
      this.pokemonDef = pokemonDef;
      this.pokemonSatk = pokemonSatk;
      this.pokemonSdef = pokemonSdef;
      this.pokemonSpd = pokemonSpd;
      this.pokemonType2 = pokemonType2;
      this.pokemonAbilitie2 = pokemonAbilitie2;
   }
}
