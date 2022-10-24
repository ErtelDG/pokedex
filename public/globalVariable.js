"use strict";
// global variable who need in the project for all and rendering!
let currentPokemon = 1;
let intermediateValue = 181;
let maxPokemons = 200;
let generation1 = {};
let generation2 = {};
let generation3 = {};
let generation4 = {};
let generation5 = {};
let generation6 = {};
let generation7 = {};
let generation8 = {};
let generation9 = {};
//ulr´s api
let url1 = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url for stats
let url2 = "https://pokeapi.co/api/v2/pokemon-species/"; //poke api v2 url for generation and color
//response api save here as json
let url1responseCurrentPokemonAsJson;
let url2responseCurrentPokemonAsJson;
//variable for fail requests
let found = true; //found a other pokemon?
let counterRequestFailToApi = 0;
// pokemon data save local:
let localPokemonsData = {};
//variable for render contains
//contain for small pokemon cards
let containerRenderAllPokemonSmall = document.getElementById("renderAllPokemonSmall");
//container for big pokemon cards
// => PLACEHOLDER!!!!!!!!!!!!!!!!!!!!!!!!
// pokemon class
class PokemonCard {
    pokemonId;
    pokemonName;
    pokemonImage;
    pokemonType1;
    color;
    pokemonGeneration;
    pokemonWeight;
    pokemonHeight;
    pokemonAbilitie1;
    flavorPokemon;
    pokemonHP;
    pokemonAtk;
    pokemonDef;
    pokemonSatk;
    pokemonSdef;
    pokemonSpd;
    pokemonType2;
    pokemonAbilitie2;
    constructor(pokemonId, pokemonName, pokemonImage, pokemonType1, color, pokemonGeneration, pokemonWeight, pokemonHeight, pokemonAbilitie1, flavorPokemon, pokemonHP, pokemonAtk, pokemonDef, pokemonSatk, pokemonSdef, pokemonSpd, pokemonType2, pokemonAbilitie2) {
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
// pokemon base class
class PokemonCardBaseData {
    pokemonId;
    pokemonName;
    pokemonImage;
    color;
    pokemonGeneration;
    constructor(pokemonId, pokemonName, pokemonImage, color, pokemonGeneration) {
        this.pokemonId = pokemonId;
        this.pokemonName = pokemonName;
        this.pokemonImage = pokemonImage;
        this.color = color;
        this.pokemonGeneration = pokemonGeneration;
    }
}
