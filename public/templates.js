"use strict";
function pokemonSmallCard(renderId, renderName, renderImage, renderColor, renderGeneration) {
    return `
         <div name="show-pokemon-card" id="${renderId}" onclick="showBigPokemonCard(${renderId},${renderGeneration})"
                  class="flex flex-col  w-26 h-28 my-2 mx-2 bg-white border border-solid border-r-05rem shadow-s cursor-pointer" style="border-color: ${renderColor};">
                  <div name="pokemon-number" class="w-full h-4 flex justify-end">
                     <div name="number-text"
                        class="font-normal text-xxs flex justify-center text-right px-1" style="color:${renderColor}" >#${renderId}
                     </div>
                  </div>
                  <div name="pokemon-image" class="flex justify-center w-full h-18"><img class="w-18 h-18"
                        name="poke-img" src=${renderImage}></div>
                  <div name="pokemon-name"
                     class="w-full h-full flex text-white justify-center items-center text-center border-r-bottom-05rem" style=background-color:${renderColor}>
                     <div name="name-text" class="font-normal text-xxs flex items-center text-center">${renderName[0].toUpperCase() + renderName.slice(1)}</div>
                  </div>
               </div>
         `;
}
