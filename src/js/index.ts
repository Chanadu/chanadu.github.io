// console.log("Hello World")

let baseHex : HTMLImageElement = document.createElement('img')
let hexes : HTMLImageElement[][] = [...Array(10)].map(() => Array(10));
let hexesHolders : HTMLDivElement[][] = [...Array(10)].map(() => Array(10));

baseHex.id = "hex"
baseHex.className = "absolute transform-gpu" //h-52 w-52
baseHex.src = "/imgs/hexagon.svg"
let factor : number = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920)) * 1.5
baseHex.width = 180.620956 * factor
baseHex.height = 208 * factor
baseHex.alt = "Hexagon"
let hexStyle : HTMLStyleElement = document.createElement('style')
hexStyle.id = "hexStyle"
document.body.append(hexStyle)

let mouseOverHexes : number[][] = [];
let currentMouseOverHex : number[] = [];
hexStyle.append(`
.opacity0 {
    opacity: 0;
}
`)
for (let i : number = 0; i < 10; i++) {
    for (let j : number = 0; j < 10; j++) {

        hexes[i]![j] = baseHex.cloneNode()! as HTMLImageElement
        hexes[i]![j]!.id = `hex${i}_${j}`

        hexesHolders[i]![j] = document.createElement('div') as HTMLDivElement
        hexesHolders[i]![j]!.id = `hexHolder${i}_${j}`

        hexStyle.append(`#hex${i}_${j} {
                            left: ${(i - (.96 * factor)) * (factor * 11.25) + (j % 2 == 0 ? (5.625 * factor) : 0)}rem; 
                            top: ${(j - (factor * .23)) * (factor * 9.7)}rem; 
                            z-index: ${i + j*100}
                        }`)

        document.getElementById("hexContainer")!.appendChild(hexesHolders[i]![j]!)
        document.getElementById(`hexHolder${i}_${j}`)!.appendChild(hexes[i]![j]!)

        hexes[i]![j]!.onmouseenter = () => {
            mouseOverHexes.push([i, j]);
            hexesHolders[i]![j]!.classList.add("opacity0");
        }

        hexes[i]![j]!.onmouseleave = () => {
            for (let k : number = 0; k < mouseOverHexes.length; k++) {
                if (mouseOverHexes[k]![0] == i && mouseOverHexes[k]![1] == j) {
                    mouseOverHexes.splice(k, 1);
                    break;
                }
            }

            hexesHolders[i]![j]!.classList.remove("opacity0");
        }
    }
}