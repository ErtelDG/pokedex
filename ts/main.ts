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
   let color2 = "undefined";

   if (url1responseCurrentPokemonAsJson["types"].length > 1) {
      type2 =
         url1responseCurrentPokemonAsJson["types"][1]["type"][
            "name"
         ][0].toUpperCase(0) +
         url1responseCurrentPokemonAsJson["types"][1]["type"]["name"].slice(1);
   }
   if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
      abilities2 =
         url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
   }
   if (type2 != "undefined") {
      let farbcode = setColorCodeCurrentPokemon(
         url1responseCurrentPokemonAsJson,
         1
      );
      color2 = farbcode;
   }

   //fix format bug:
   let flavorOld =
      url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"];
   let flavorNewFixed = flavorOld.replace("\f", " ");

   let color = setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson, 0);

   let renderBigPokemonCard = new PokemonCard(
      url2responseCurrentPokemonAsJson["id"],
      url2responseCurrentPokemonAsJson["name"][0].toUpperCase() +
         url2responseCurrentPokemonAsJson["name"].slice(),
      url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"][
         "front_default"
      ],
      url1responseCurrentPokemonAsJson["types"][0]["type"][
         "name"
      ][0].toUpperCase() +
         url1responseCurrentPokemonAsJson["types"][0]["type"]["name"].slice(1),
      color,
      url2responseCurrentPokemonAsJson["generation"]["name"],
      url1responseCurrentPokemonAsJson["weight"] / 10,
      url1responseCurrentPokemonAsJson["height"] / 10,
      url1responseCurrentPokemonAsJson["abilities"][0]["ability"][
         "name"
      ][0].toUpperCase() +
         url1responseCurrentPokemonAsJson["abilities"][0]["ability"][
            "name"
         ].slice(1),
      flavorNewFixed,
      url1responseCurrentPokemonAsJson["stats"][0]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][1]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][2]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][3]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][4]["base_stat"],
      url1responseCurrentPokemonAsJson["stats"][5]["base_stat"],
      type2,
      abilities2,
      color2
   );

   let renderContainBigCard = document.getElementById("renderBigPokemon");
   if (renderContainBigCard != null) {
      renderContainBigCard.innerHTML = " ";
      renderContainBigCard.innerHTML +=
         renderBigPokemonCardWithStats(renderBigPokemonCard);
   }

   if (renderBigPokemonCard.pokemonType2 == "undefined") {
      let type2Html = document.getElementById("pokemonType2") as HTMLElement;
      if (type2Html != null) {
         type2Html.style.display = "none";
      }
   }

   let bodyElement = document.getElementById("bodyElement");
   if (bodyElement != null) {
      bodyElement.classList.add("overflow-hidden");
   }

   // let renderBigCardPokemon = document.getElementById("renderBigCardPokemon");
   // if (renderBigCardPokemon != null) {
   //    renderBigCardPokemon.style.backgroundColor =
   //       renderBigPokemonCard.color + "bb";
   // }
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

function closeBigCard() {
   let renderContainBigCard = document.getElementById("renderBigPokemon");
   if (renderContainBigCard != null) {
      renderContainBigCard.innerHTML = " ";
   }
   let bodyElement = document.getElementById("bodyElement");
   if (bodyElement != null) {
      bodyElement.classList.remove("overflow-hidden");
   }
}
let searchPokemonId: number;
async function showBigPokemonCardBySearch() {
   // let searchPokemon = document.getElementById("myInput") as HTMLElement;
   const input = document.getElementById("myInput") as HTMLInputElement | null;
   if (input != null) {
      let searchPokemon = input.value.toLowerCase();
      let response = await fetch(url1 + searchPokemon);
      let searchPokemonToJson = await response.json();
      searchPokemonId = searchPokemonToJson["id"];
      showBigPokemonCard(searchPokemonId);
      input.value = "";
   }
}
