"use strict";
console.log("Hello World");
let hexes = [];
let hexesHolders = [];
let baseHex = document.createElement('img');
baseHex.id = "hex";
baseHex.className = "h-52 w-52 absolute transform-gpu";
baseHex.src = "/imgs/hexagon.svg";
baseHex.alt = "Hexagon";
let hexStyle = document.createElement('style');
hexStyle.id = "hexStyle";
document.body.append(hexStyle);
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let index = i + j * 10;
        hexes[index] = baseHex.cloneNode();
        hexes[index].id = `hex${i}${j}`;
        hexesHolders[index] = document.createElement('div');
        hexesHolders[index].id = `hexHolder${i}${j}`;
        hexStyle.append(`#hex${i}${j} {
                            left: ${(i - .75) * 11.25 + (j % 2 == 0 ? 5.625 : 0)}rem; 
                            top: ${(j - .5) * 9.7}rem; 
                            z-index: ${i}${j}
                        }`);
        document.getElementById("hexContainer").appendChild(hexesHolders[index]);
        document.getElementById(`hexHolder${i}${j}`).appendChild(hexes[index]);
        hexes[index].onmouseenter = () => {
        };
        hexes[index].onmouseleave = () => {
        };
    }
}
//# sourceMappingURL=index.js.map