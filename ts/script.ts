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
      const generation = localPokemonsData[k]["pokemonGeneration"];
      switch (generation) {
         case "generation-i":
            generation1[k] = localPokemonsData[k];
            break;
         case "generation-ii":
            generation2[k] = localPokemonsData[k];
            break;
         case "generation-iii":
            generation3[k] = localPokemonsData[k];
            break;
         case "generation-iv":
            generation4[k] = localPokemonsData[k];
            break;
         case "generation-v":
            generation5[k] = localPokemonsData[k];
            break;
         case "generation-vi":
            generation6[k] = localPokemonsData[k];
            break;
         case "generation-vii":
            generation7[k] = localPokemonsData[k];
            break;
         case "generation-viii":
            generation8[k] = localPokemonsData[k];
            break;
         case "generation-ix":
            generation9[k] = localPokemonsData[k];
            break;
         default:
            break;
      }
   }
}

// redner small pokemon cards
function renderSmallPokemonCard(i: number) {
   let generationSelected;
   switch (i) {
      case 1:
         generationSelected = generation1;
         break;
      case 2:
         generationSelected = generation2;
         break;
      case 3:
         generationSelected = generation3;
         break;
      case 4:
         generationSelected = generation4;
         break;
      case 5:
         generationSelected = generation5;
         break;
      case 6:
         generationSelected = generation6;
         break;
      case 7:
         generationSelected = generation7;
         break;
      case 8:
         generationSelected = generation8;
         break;
      case 9:
         generationSelected = generation9;
         break;
      default:
         break;
   }
   console.log(generationSelected);
   if (containerRenderAllPokemonSmall != null) {
      for (let j = 1; j <= Object.keys(generationSelected).length; j++) {
         let generationKeyPosition: number = parseInt(
            Object.keys(generationSelected)[j]
         );
         let renderId = generationSelected[generationKeyPosition]["pokemonId"];
         let renderName =
            generationSelected[generationKeyPosition]["pokemonName"];
         let renderImage =
            generationSelected[generationKeyPosition]["pokemonImage"];
         let renderColor = generationSelected[generationKeyPosition]["color"];
         let renderGeneration =
            generationSelected[generationKeyPosition]["pokemonGeneration"];
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

// sort small pokemon cards from A to Z
function sortPokemonAZ() {
   let sortArray: any[] = [];
   for (let i = 1; i < Object.keys(localPokemonsData).length; i++) {
      sortArray.push([
         localPokemonsData[i]["pokemonName"],
         localPokemonsData[i]["pokemonId"],
      ]);
   }
   sortArray.sort();
   if (containerRenderAllPokemonSmall != null) {
      containerRenderAllPokemonSmall.innerHTML = "";
   }
   for (let j = 0; j < sortArray.length; j++) {
      const element = sortArray[j];
      renderSmallPokemonCard(element[1]);
   }
   sortArray = [];
}

//render next when coming to the bottom at the side
function renderMorePokemonCardsSmall() {
   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      alert("Unten angekommen!"); // you're at the bottom of the page
   }
}
