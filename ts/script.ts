//clear container with small pokemon cards
function clearContainerWithSmallPokemonCards() {
   if (containerRenderAllPokemonSmall != null) {
      containerRenderAllPokemonSmall.innerHTML = " ";
   }
}

// update the absolte base data of the pokemon
async function updateBaseDataJson() {
   for (let i = 1; i <= 10; i++) {
      await getPokemonValueByApi(i, url1);
      await getPokemonValueByApi(i, url2);

      let type1ValueForColor = setColorCodeCurrentPokemon(
         url1responseCurrentPokemonAsJson
      );
      localPokemonsData[i] = new PokemonCardBaseData(
         url1responseCurrentPokemonAsJson["id"],
         url1responseCurrentPokemonAsJson["name"],
         url1responseCurrentPokemonAsJson["sprites"]["other"][
            "official-artwork"
         ]["front_default"],
         type1ValueForColor,

         url2responseCurrentPokemonAsJson["generation"]["name"]
      );
      console.log("Pokemon created wit ID: ", i);
   }
}

//load pokemon base data from JSON
async function loadPokemonBaseJSON() {
   let response = await fetch("pokemonBaseData.json");
   localPokemonsData = await response.json();
}

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

// pokemon save local
function savePokemonLocal(i: number) {
   if (
      url1responseCurrentPokemonAsJson != null &&
      url1responseCurrentPokemonAsJson["status"] != "fail" &&
      found == true
   ) {
      createPokemonLocal(
         i,
         url1responseCurrentPokemonAsJson,
         url2responseCurrentPokemonAsJson
      );
   } else {
      found = false;
   }
}

//creat pokemon card at values api
function createPokemonLocal(
   i: number,
   url1responseCurrentPokemonAsJson: any,
   url2responseCurrentPokemonAsJson: any
) {
   let type2Value = checkType2Exists(url1responseCurrentPokemonAsJson);
   let abilitie2Value = checkAbilitie2Exists(url1responseCurrentPokemonAsJson);
   let type1ValueForColor = setColorCodeCurrentPokemon(
      url1responseCurrentPokemonAsJson
   );
   localPokemonsData[i] = new PokemonCard(
      url1responseCurrentPokemonAsJson["id"],
      url1responseCurrentPokemonAsJson["name"],
      url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"][
         "front_default"
      ],
      url1responseCurrentPokemonAsJson["types"][0]["type"]["name"],
      type1ValueForColor,
      url2responseCurrentPokemonAsJson["generation"]["name"],
      parseInt(url1responseCurrentPokemonAsJson["weight"]) / 10,
      parseInt(url1responseCurrentPokemonAsJson["height"]) / 10,
      url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"],
      url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"],
      url1responseCurrentPokemonAsJson["stats"][0]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][1]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][2]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][3]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][4]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][5]["base_stat"],
      type2Value,
      abilitie2Value
   );
}

function checkType2Exists(url1responseCurrentPokemonAsJson: any) {
   let type2Value: string = "undefined";
   if (url1responseCurrentPokemonAsJson["types"].length > 1) {
      type2Value = url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
   }
   return type2Value;
}

function checkAbilitie2Exists(url1responseCurrentPokemonAsJson: any) {
   let abilitie2Value: string = "undefined";
   if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
      abilitie2Value =
         url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
   }
   return abilitie2Value;
}

function setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson: any) {
   let type1ValueForColor: string = "undefined";
   switch (url1responseCurrentPokemonAsJson["types"][0]["type"]["name"]) {
      case "rock":
         type1ValueForColor = "#B69E31";
         break;
      case "ghost":
         type1ValueForColor = "#70559B";
         break;
      case "steel":
         type1ValueForColor = "#B7B9D0";
         break;
      case "water":
         type1ValueForColor = "#6493EB";
         break;
      case "grass":
         type1ValueForColor = "#74CB48";
         break;
      case "psychic":
         type1ValueForColor = "#FB5584";
         break;
      case "ice":
         type1ValueForColor = "#9AD6DF";
         break;
      case "dark":
         type1ValueForColor = "#75574C";
         break;
      case "fairy":
         type1ValueForColor = "#E69EAC";
         break;
      case "normal":
         type1ValueForColor = "#AAA67F";
         break;
      case "fighting":
         type1ValueForColor = "#C12239";
         break;
      case "flying":
         type1ValueForColor = "#A891EC";
         break;
      case "poison":
         type1ValueForColor = "#A43E9E";
         break;
      case "ground":
         type1ValueForColor = "#DEC16B";
         break;
      case "bug":
         type1ValueForColor = "#A7B723";
         break;
      case "fire":
         type1ValueForColor = "#F57D31";
         break;
      case "electric":
         type1ValueForColor = "#F9CF30";
         break;
      case "dragon":
         type1ValueForColor = "#7037FF";
         break;
      default:
         type1ValueForColor = "#000000";
         break;
   }
   return type1ValueForColor;
}
//sort all pokemons to the generation
async function sortPokemonToGeneration() {
   for (
      let k = currentPokemon;
      k <= Object.keys(localPokemonsData).length;
      k++
   ) {
      const generation = await localPokemonsData[k]["pokemonGeneration"];
      switch (generation) {
         case "generation-i":
            generation1[k] = await localPokemonsData[k];
            break;
         case "generation-ii":
            generation2[k] = await localPokemonsData[k];
            break;
         case "generation-iii":
            generation3[k] = await localPokemonsData[k];
            break;
         case "generation-iv":
            generation4[k] = await localPokemonsData[k];
            break;
         case "generation-v":
            generation5[k] = await localPokemonsData[k];
            break;
         case "generation-vi":
            generation6[k] = await localPokemonsData[k];
            break;
         case "generation-vii":
            generation7[k] = await localPokemonsData[k];
            break;
         case "generation-viii":
            generation8[k] = await localPokemonsData[k];
            break;
         case "generation-ix":
            generation9[k] = await localPokemonsData[k];
            break;
         default:
            break;
      }
   }
}

// redner small pokemon cards
async function renderSmallPokemonCard(i: number) {
   let generationSelected;
   switch (i) {
      case 1:
         generationSelected = await generation1;
         break;
      case 2:
         generationSelected = await generation2;
         break;
      case 3:
         generationSelected = await generation3;
         break;
      case 4:
         generationSelected = await generation4;
         break;
      case 5:
         generationSelected = await generation5;
         break;
      case 6:
         generationSelected = await generation6;
         break;
      case 7:
         generationSelected = await generation7;
         break;
      case 8:
         generationSelected = await generation8;
         break;
      case 9:
         generationSelected = await generation9;
         break;
      default:
         break;
   }

   for (let counterBtn = 1; counterBtn < 10; counterBtn++) {
      if (counterBtn == i) {
         let addClass = document.getElementById("renderGenerationBtn" + i);
         if (addClass != null) {
            addClass.classList.add("bg-gray-200");
         }
      } else {
         let removeClass = document.getElementById(
            "renderGenerationBtn" + counterBtn
         );
         if (removeClass != null) {
            removeClass.classList.remove("bg-gray-200");
         }
      }
   }
   createRenderSmallPokemonCard(generationSelected);
   async function createRenderSmallPokemonCard(generationSelected: any) {
      if (containerRenderAllPokemonSmall != null) {
         containerRenderAllPokemonSmall.innerHTML = " ";
         for (let j = 0; j <= Object.keys(generationSelected).length; j++) {
            let generationKeyPosition: number = parseInt(
               Object.keys(generationSelected)[j]
            );
            if ((await generationSelected[generationKeyPosition]) != null) {
               let renderImage = await generationSelected[
                  generationKeyPosition
               ]["pokemonImage"];
               let renderColor = await generationSelected[
                  generationKeyPosition
               ]["color"];
               let renderGeneration = await generationSelected[
                  generationKeyPosition
               ]["pokemonGeneration"];
               let renderId = await generationSelected[generationKeyPosition][
                  "pokemonId"
               ];
               let renderName = await generationSelected[generationKeyPosition][
                  "pokemonName"
               ];
               containerRenderAllPokemonSmall.innerHTML += pokemonSmallCard(
                  renderId,
                  renderName,
                  renderImage,
                  renderColor,
                  renderGeneration
               );
            }
         }
      }
   }

   // Prüfen Erstellung Data Liste!
   //renderSearchList(generationSelected);

   let sortBtn = document.getElementById("sortBtnAZ");
   if (sortBtn != null) {
      sortBtn.innerHTML = createSortBtn(i);
   }

   pokemonsSearchId?.innerHTML;
}

//function sort the current generation
async function sortPokemonAZ(generation: any) {
   let sortArray: any[] = [];

   if (containerRenderAllPokemonSmall != null) {
      containerRenderAllPokemonSmall.innerHTML = "";

      let startFirstObject = generation[Object.keys(generation)[0]];

      for (
         let i = startFirstObject["pokemonId"];
         i < startFirstObject["pokemonId"] + Object.keys(generation).length;
         i++
      ) {
         sortArray.push([
            await generation[i]["pokemonName"],
            await generation[i]["pokemonId"],
         ]);
      }
      sortArray.sort();

      for (let j = 0; j < sortArray.length; j++) {
         const element = sortArray[j][1];
         renderSortPokemonCard(generation, generation[element]["pokemonId"]);
      }
   }
}

async function renderSortPokemonCard(generation: any, indexPokemon: any) {
   if (containerRenderAllPokemonSmall != null) {
      containerRenderAllPokemonSmall.innerHTML = "";
      let renderImage = await generation[indexPokemon]["pokemonImage"];
      let renderColor = await generation[indexPokemon]["color"];
      let renderGeneration = await generation[indexPokemon][
         "pokemonGeneration"
      ];
      let renderId = await generation[indexPokemon]["pokemonId"];
      let renderName = await generation[indexPokemon]["pokemonName"];
      containerRenderAllPokemonSmall.innerHTML += pokemonSmallCard(
         renderId,
         renderName,
         renderImage,
         renderColor,
         renderGeneration
      );
   }
}

//render all pokemons in array
function loadPokemonNamesInArray() {
   for (let i = 1; i <= Object.keys(localPokemonsData).length; i++) {
      const element =
         localPokemonsData[i]["pokemonName"][0].toUpperCase() +
         localPokemonsData[i]["pokemonName"].slice(1);
      searchAllPokemonsArray.push(element);
   }
   searchAllPokemonsArray.sort();
}

//render next when coming to the bottom at the side
function renderMorePokemonCardsSmall() {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      alert("Unten angekommen!"); // you're at the bottom of the page
   }
}
