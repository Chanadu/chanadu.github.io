"use strict";
console.log("Hello World");
let hexes = [];
let hexesHolders = [];
let baseHex = document.createElement('img');
baseHex.id = "hex";
baseHex.className = "absolute transform-gpu"; //h-52 w-52
baseHex.src = "/imgs/hexagon.svg";
let factor = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920)) * 1.5;
baseHex.width = 180.620956 * factor;
baseHex.height = 208 * factor;
baseHex.alt = "Hexagon";
let hexStyle = document.createElement('style');
hexStyle.id = "hexStyle";
document.body.append(hexStyle);
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let index = i + j * 100;
        hexes[index] = baseHex.cloneNode();
        hexes[index].id = `hex${index}`;
        hexesHolders[index] = document.createElement('div');
        hexesHolders[index].id = `hexHolder${index}`;
        hexStyle.append(`#hex${index} {
                            left: ${(i - (.96 * factor)) * (factor * 11.25) + (j % 2 == 0 ? (5.625 * factor) : 0)}rem; 
                            top: ${(j - (factor * .23)) * (factor * 9.7)}rem; 
                            z-index: ${index}
                        }`);
        document.getElementById("hexContainer").appendChild(hexesHolders[index]);
        document.getElementById(`hexHolder${index}`).appendChild(hexes[index]);
        hexes[index].onmouseenter = () => {
        };
        hexes[index].onmouseleave = () => {
        };
    }
}
//# sourceMappingURL=index.js.map