"use strict";
console.log("Hello World");
let hexes = [];
let baseHex = document.createElement('img');
baseHex.id = "hex";
baseHex.className = "h-52 w-52 absolute transform-gpu";
baseHex.src = "/imgs/hexagon.svg";
baseHex.alt = "Hexagon";
for (let i = 0; i < 10; i++) {
    hexes[i] = baseHex.cloneNode();
    hexes[i].classList.add('left-[500px]');
    // hexes[i]?.classList.add('left-[200px]')
    document.getElementById("hexContainer").appendChild(hexes[i]);
}
//# sourceMappingURL=index.js.map