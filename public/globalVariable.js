"use strict";
// global variable who need in the project for all and rendering!
let currentPokemon = 1;
let maxPokemons = 1;
let url1 = "https://pokeapi.co/api/v2/pokemon/"; //poke api v2 url for stats
let url2 = "https://pokeapi.co/api/v2/pokemon-species/"; //poke api v2 url for generation and color
let url1responseCurrentPokemonAsJson;
let url2responseCurrentPokemonAsJson;
let localPokemonsData = {};
let found = true; //found a other pokemon?
let counterRequestFailToApi = 0;
