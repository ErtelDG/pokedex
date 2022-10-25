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
function createSortBtn(i) {
    return `
   
                     <div name="sort-a-z"
                        class="flex items-center px-2 py-2 w-8 h-8 rounded-md cursor-pointer hover:bg-gray-200 "
                        onclick="sortPokemonAZ(generation${i})">
                        <div
                           class="font-semibold text-xxs text-line-xxs text-center text-color-type-dark-gray w-2 h-full flex justify-center items-center">
                           A Z</div>
                        <div class="h-8 w-8 flex justify-center items-center">
                           <svg width="1rem" height="1rem" viewBox="0 0 9 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M9.01733 11.1082L8.76483 10.8557C8.59747 10.6883 8.32611 10.6883 8.15872 10.8557L5.17857 13.8531V0.428572C5.17857 0.191893 4.98668 0 4.75 0H4.39285C4.15617 0 3.96428 0.191893 3.96428 0.428572V13.8531L0.984128 10.8557C0.81677 10.6883 0.545412 10.6883 0.378019 10.8557L0.125518 11.1082C-0.0418394 11.2756 -0.0418394 11.5469 0.125518 11.7143L4.26839 15.8745C4.43575 16.0418 4.7071 16.0418 4.8745 15.8745L9.01737 11.7143C9.18472 11.5469 9.18472 11.2756 9.01733 11.1082V11.1082Z"
                                 fill="#212121" />
                           </svg>
                        </div>
                     </div>`;
}
