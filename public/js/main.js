"use strict";
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
async function showBigPokemonCard(idPokemon) {
    await getPokemonValueByApi(idPokemon, url1);
    await getPokemonValueByApi(idPokemon, url2);
    let type2 = "undefined";
    let abilities2 = "undefined";
    if (url1responseCurrentPokemonAsJson["types"].length > 1) {
        type2 = url1responseCurrentPokemonAsJson["types"][1]["type"]["name"];
    }
    if (url1responseCurrentPokemonAsJson["abilities"].length > 1) {
        abilities2 =
            url1responseCurrentPokemonAsJson["abilities"][1]["ability"]["name"];
    }
    let color = setColorCodeCurrentPokemon(url1responseCurrentPokemonAsJson);
    let renderBigPokemonCard = new PokemonCard(url2responseCurrentPokemonAsJson["id"], url2responseCurrentPokemonAsJson["name"], url1responseCurrentPokemonAsJson["sprites"]["other"]["official-artwork"]["front_default"], url1responseCurrentPokemonAsJson["types"][0]["type"]["name"], color, url2responseCurrentPokemonAsJson["generation"]["name"], url1responseCurrentPokemonAsJson["weight"] / 10, url1responseCurrentPokemonAsJson["height"] / 10, url1responseCurrentPokemonAsJson["abilities"][0]["ability"]["name"], url2responseCurrentPokemonAsJson["flavor_text_entries"][0]["flavor_text"], url1responseCurrentPokemonAsJson["stats"][0]["base_stat"], url1responseCurrentPokemonAsJson["stats"][1]["base_stat"], url1responseCurrentPokemonAsJson["stats"][2]["base_stat"], url1responseCurrentPokemonAsJson["stats"][3]["base_stat"], url1responseCurrentPokemonAsJson["stats"][4]["base_stat"], url1responseCurrentPokemonAsJson["stats"][5]["base_stat"], type2, abilities2);
    let renderContainBigCard = document.getElementById("renderBigPokemon");
    if (renderContainBigCard != null) {
        (renderContainBigCard.innerHTML = " "),
            (renderContainBigCard.innerHTML += `
   

          <div id="renderBigCardPokemon" class="w-screen h-screen flex justify-center items-center z-10 bg-opacity-50"  onclick="closeBigCard()">

      <!-- pokemon card -->
      <!-- backgroung-color depending on current pokemon -->
      <div name="background-current-pokemon-by-mobile" class="bg-current-pokemon-full" style="background-color:${renderBigPokemonCard.color}">
         <div id="pokecard" name="card-pokemon" class="w-90 h-640 relative border-r-075rem" style="background-color:${renderBigPokemonCard.color}">

            <!-- pokemon card name header -->
            <div name="pokemon-card-name-header"
               class="absolute top-6 left-5 right-5 w-80 h-8  flex items-start p-0 gap-4">
               <div name="arrow-left-pokemon-card-name-header" class="w-6 h-8 flex justify-center items-center">
                  <!-- pokemon-card-name-header -->
                  <img src="img/arrowLeft.png">
               </div>
               <div name="pokemon-name" class="w-56 h-8 font-bold text-2xl flex items-center text-white">${renderBigPokemonCard.pokemonName[0].toUpperCase() +
                renderBigPokemonCard.pokemonName.slice(1)}</div>
               <div name="pokemon-number" class="w-8 h-8 font-bold text-xs flex items-center text-white">#${renderBigPokemonCard.pokemonId}</div>
            </div>

            <!-- current pokemon stats card -->
            <div name="current-pokemon-stats-card"
               class="w-88 h-103 gap-4 absolute left-position-50-from-22rem bottom-1 bg-white rounded-lg flex flex-col items-center pt-14 px-5">
               <!-- pokemon types -->
               <div name="pokemon-type" class="flex justify-center p-0 gap-4 w-78 h-5">
                  <div name="type" class="w-14 h-5 py-05 px-2 flex flex-col bg-color-type-psychic rounded-lg">
                     <div class="w-10 h-4 text-xs text-white flex items-center justify-center">Psychic</div>
                  </div>
                  <div name="physic" class="w-14 h-5 py-05 px-2 flex flex-col bg-color-type-medium-gray rounded-lg">
                     <div class=" w-10 h-4 text-xs text-white flex items-center justify-center">Type</div>
                  </div>
               </div>
               <!--title about pokemon -->
               <div name="title-about" class="flex justify-center p-0 w-78 h-4">
                  <div name="title-about-text"
                     class="text-sm font-bold flex items-center justify-center text-center w-78 h-4 text-color-type-psychic">
                     About</div>
               </div>
               <!-- about current pokemon stats -->
               <div name="about-current-pokemon-stats" class="flex p-0 justify-between w-64 h-12">
                  <div name="weight" class="flex flex-col p-0 w-13 h-12">
                     <div name="value-weight" class="flex py-2 gap-2 w-13 h-9">
                        <div class="w-4 h-4"><svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M14.5 2H12.4747C11.5609 0.793125 10.1272 0 8.5 0C6.87281 0 5.43906 0.793125 4.52531 2H2.5C1.39719 2 0.5 2.89719 0.5 4V14C0.5 15.1028 1.39719 16 2.5 16H14.5C15.6028 16 16.5 15.1028 16.5 14V4C16.5 2.89719 15.6028 2 14.5 2ZM8.5 1C10.7091 1 12.5 2.79094 12.5 5C12.5 7.20906 10.7091 9 8.5 9C6.29094 9 4.5 7.20906 4.5 5C4.5 2.79094 6.29094 1 8.5 1ZM15.5 14C15.5 14.5522 15.0522 15 14.5 15H2.5C1.94781 15 1.5 14.5522 1.5 14V4C1.5 3.44781 1.94781 3 2.5 3H3.92375C3.65437 3.61344 3.5 4.28813 3.5 5C3.5 7.75688 5.74312 10 8.5 10C11.2569 10 13.5 7.75688 13.5 5C13.5 4.28813 13.3456 3.61344 13.0763 3H14.5C15.0522 3 15.5 3.44781 15.5 4V14ZM8.5 8C9.32719 8 10 7.32719 10 6.5C10 6.065 9.81094 5.67625 9.51437 5.40219L10.4594 3.19688C10.5681 2.94344 10.4506 2.64938 10.1966 2.54063C9.94406 2.43187 9.64906 2.54906 9.54031 2.80344L8.59469 5.00969C7.48656 4.9375 7 5.89531 7 6.5C7 7.32719 7.67281 8 8.5 8ZM8.5 6C8.77625 6 9 6.22375 9 6.5C9 6.77625 8.77625 7 8.5 7C8.22375 7 8 6.77625 8 6.5C8 6.22375 8.22375 6 8.5 6Z"
                                 fill="#212121" />
                           </svg>
                        </div>
                        <div class="text-xxs font-normal w-8 h-4 text-color-type-dark-gray">9,9 kg</div>
                     </div>
                     <div class="flex justify-center">
                        <div class="text-xxs font-normal w-8 h-4 text-color-type-dark-gray text-center">Weight</div>
                     </div>
                  </div>
                  <div class="bg-color-type-light-gray w-0-25 h-12"></div>

                  <div name="height" class="flex flex-col p-0 w-13 h-12">
                     <div name="value-height" class="flex py-2 gap-2 w-13 h-9">
                        <div class="w-4 h-4"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M7.5 0H1.5C0.947812 0 0.5 0.447812 0.5 1V15C0.5 15.5522 0.947812 16 1.5 16H7.5C8.05219 16 8.5 15.5522 8.5 15V1C8.5 0.447812 8.05219 0 7.5 0ZM1.5 15V1H7.5V3H5.75C5.61188 3 5.5 3.11188 5.5 3.25V3.75C5.5 3.88812 5.61188 4 5.75 4H7.5V6H5.75C5.61188 6 5.5 6.11188 5.5 6.25V6.75C5.5 6.88812 5.61188 7 5.75 7H7.5V9H5.75C5.61188 9 5.5 9.11187 5.5 9.25V9.75C5.5 9.88813 5.61188 10 5.75 10H7.5V12H5.75C5.61188 12 5.5 12.1119 5.5 12.25V12.75C5.5 12.8881 5.61188 13 5.75 13H7.5V15H1.5Z"
                                 fill="#212121" />
                           </svg>
                        </div>
                        <div class="text-xxs font-normal w-8 h-4 text-color-type-dark-gray">0,4 m</div>
                     </div>
                     <div class="flex justify-center">
                        <div class="text-xxs font-normal w-8 h-4 text-color-type-dark-gray text-center">Height</div>
                     </div>
                  </div>
                  <div class="bg-color-type-light-gray w-0-25 h-12"></div>
                  <div name="abilities" class="flex flex-col p-0 w-13 h-12">
                     <div name="value-abilities" class="flex py-2 gap-2 w-13 h-9">
                        <div class="text-xxs font-normal text-color-type-dark-gray">Synchronize</div>
                     </div>
                     <div class="flex justify-center">
                        <div class="text-xxs font-normal w-8 h-4 text-color-type-dark-gray text-center">Abilities</div>
                     </div>
                  </div>
               </div>
               <!-- text over pokemon -->
               <div name="text-over-pokemon"
                  class="flex items-center w-78 h-8 text-center font-normal text-xxs text-color-type-dark-gray">When
                  viewed
                  through a microscope, this Pokémon’s short, fine,
                  delicate hair can be seen.</div>
               <div name="title-stats"
                  class="font-bold text-sm w-78 h-4 flex items-center justify-center text-color-type-psychic">Base Stats
               </div>
               <!-- base stats -->
               <div name="base-stats-current-pokemon" class="flex p-0 gap-2 w-78 h-25">
                  <div name="base-stats-name" class="flex flex-col p-0 w-7 h-25">
                     <div name="HP" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">HP
                     </div>
                     <div name="ATK" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">
                        ATK
                     </div>
                     <div name="DEF" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">
                        DEF
                     </div>
                     <div name="SATK" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">
                        SATK
                     </div>
                     <div name="SDEF" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">
                        SDEF
                     </div>
                     <div name="SPD" class="font-bold text-xxs flex items-center justify-end text-color-type-psychic">
                        SPD
                     </div>
                  </div>
                  <div name="line-vertical" class="flex flex-col py-0 px-1 w-2 h-25">
                     <div name="line-vertical-image" class="h-25 w-0.5 bg-color-type-light-gray"></div>
                  </div>
                  <div name="base-stats-level" class="flex flex-col w-5 h-25">
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                     <div name="base-stats-level"
                        class="w-5 h-4 font-normal text-xxs flex items-center text-color-type-dark-gray">100</div>
                  </div>
                  <div class="w-full h-25 flex flex-col">
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_HP absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_HP {
                                 position: absolute;
                                 width: 50%;
                                 top: 0px;
                                 animation: bounceHP 2s linear;
                              }

                              @keyframes bounceHP {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 50%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_ATK absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_ATK {
                                 position: absolute;
                                 width: 40%;
                                 top: 0px;
                                 animation: bounceATK 2s linear;
                              }

                              @keyframes bounceATK {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 40%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_DEF absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_DEF {
                                 position: absolute;
                                 width: 60%;
                                 top: 0px;
                                 animation: bounceDEF 2s linear;
                              }

                              @keyframes bounceDEF {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 60%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_SATK absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_SATK {
                                 position: absolute;
                                 width: 90%;
                                 top: 0px;
                                 animation: bounceSATK 2s linear;
                              }

                              @keyframes bounceSATK {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 90%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_SDEF absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_SDEF {
                                 position: absolute;
                                 width: 72%;
                                 top: 0px;
                                 animation: bounceSDEF 2s linear;
                              }

                              @keyframes bounceSDEF {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 72%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                     <div name="loader" class="loader relative h-2 w-full m-1">
                        <div name="loading_1" class="loading_1 relative w-full h-full bg-color-type-light-gray"></div>
                        <div name="loading_2" class="loading_SPD absolute h-full bg-color-type-psychic top-0">
                           <style type="text/css">
                              .loading_SPD {
                                 position: absolute;
                                 width: 25%;
                                 top: 0px;
                                 animation: bounceSPD 2s linear;
                              }

                              @keyframes bounceSPD {
                                 0% {
                                    width: 0%;
                                 }

                                 100% {
                                    width: 25%;
                                 }
                              }
                           </style>
                        </div>
                     </div>
                  </div>

               </div>



            </div>





            <!-- element which have position absolute -->

            <!-- pokemon-image position absolute -->
            <div name="pokemon-image"
               class="w-50 h-50 absolute top-20 left-position-50-from-12-5rem flex items-center justify-center"><img
                  class="object-contain" src="${renderBigPokemonCard.pokemonImage}" alt="a picture from the current pokemon"></div>

            <!-- pokeball-image position absolute -->
            <div name="pokeball-image" class="w-52 h-52 absolute top-2 right-2 flex items-center justify-center"><img
                  class="object-contain" src="img/Pokeball.png" alt="a picture from the current pokemon"></div>

         </div>
      </div>
   </div>



         `);
    }
    let bodyElement = document.getElementById("bodyElement");
    if (bodyElement != null) {
        bodyElement.classList.add("overflow-hidden");
    }
    let renderBigCardPokemon = document.getElementById("renderBigCardPokemon");
    if (renderBigCardPokemon != null) {
        renderBigCardPokemon.style.backgroundColor = renderBigPokemonCard.color;
    }
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
