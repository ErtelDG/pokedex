"use strict";
function pokemonSmallCard() {
    return `<div name="show-pokemon-card"
                  class="flex flex-col w-26 h-28 bg-white border border-solid border-gray-100 border-r-05rem shadow-s">
                  <div name="pokemon-number" class="w-full h-4 flex justify-end">
                     <div name="number-text"
                        class="font-normal text-xxs flex justify-center text-right text-color-type-light-gray px-1">#304
                     </div>
                  </div>
                  <div name="pokemon-image" class="flex justify-center w-full h-18"><img class="w-18 h-18"
                        name="poke-img" src="img/pokemonImageSamllCard.png"></div>
                  <div name="pokemon-name"
                     class="w-full h-full flex text-white justify-center items-center text-center bg-color-type-steel border-r-bottom-05rem">
                     <div name="name-text" class="font-normal text-xxs flex items-center text-center">Aron</div>
                  </div>
               </div>`;
}
