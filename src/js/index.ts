console.log("Hello World")

function setMultipleAttributes(elem: SVGSVGElement | SVGPathElement, attributes: any): void {
    Object.keys(attributes).forEach(attribute => {
        elem.setAttribute(attribute, attributes[attribute]);
    });
}

let factor: number = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920))

let baseHexSvg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg")
let baseHexPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path')
let baseHexPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path')

let svgAtributes = {
    "width": "86.836998mm",
    "height": "100mm",
    "viewBox": "0 0 86.836998 100",
    "version": "1.1",
    "id": "svg5",
    "inkscape:version": "1.1.2 (0a00cf5339, 2022-02-04)",
    "sodipodi:docname": "hexagon.svg",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    "class": "absolute transform-gpu top-0 left-0",
};
let pathAttributes1 = {
    "sodipodi:type": "star",
    "style": "fill:none;fill-opacity:1;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
};
let pathAttributes2 = {
    "sodipodi:type": "star",
    "style": "fill:#323237;fill-opacity:1;stroke:none;stroke-opacity:1",
    "id": "path4292",
    "d": "m 165.59044,21.51548 149.81143,86.49368 0,172.98735 -149.81144,86.49367 -149.81144,-86.49368 5e-6,-172.98735 z",
    "transform": "matrix(0.26458333,0,0,0.26458333,-0.39396904,-1.4622067)",
};

setMultipleAttributes(baseHexSvg, svgAtributes);
setMultipleAttributes(baseHexPath1, pathAttributes1);
setMultipleAttributes(baseHexPath2, pathAttributes2);

baseHexSvg.appendChild(baseHexPath1);
baseHexSvg.appendChild(baseHexPath2);



let hexes: SVGSVGElement[][] = [...Array(10)].map(() => Array(10))
let hexesHolders: HTMLDivElement[][] = [...Array(10)].map(() => Array(10))

function makeHexes(): void {
    console.log("resize")
    factor = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920))
    let hexStyle: HTMLStyleElement = document.createElement('style')
    hexStyle.id = "hexStyle"

    hexStyle.append(`    
    #hexContainer {
        transform: scale(${.85 * factor});
    }
    `)

    document.body.append(hexStyle)

    for (let i = 0; i < hexes.length; i++) {
        for (let j = 0; j < hexes[i]!.length; j++) {
            hexes[i]![j] = baseHexSvg.cloneNode(true)! as SVGSVGElement
            hexes[i]![j]!.id = `hex${i}_${j}`

            hexesHolders[i]![j] = document.createElement('div') as HTMLDivElement
            hexesHolders[i]![j]!.id = `hexHolder${i}_${j}`

            hexStyle.append(`#hex${i}_${j} {
                            left: ${i * 20.4 + (j % 2 == 0 ? 0 : 10.2) - 11.5}rem; 
                                top: ${j * 17.7 - 8}rem;
                            }`)

            document.getElementById("hexContainer")!.appendChild(hexesHolders[i]![j]!)
            document.getElementById(`hexHolder${i}_${j}`)!.appendChild(hexes[i]![j]!)

            //             mouseOverHexes.push([i, j]);
            //             hexesHolders[i]![j]!.classList.add("opacity0");
            //             console.log(`MouseEnter ${i} ${j}`);
            //         }

            //         hexes[i]![j]!.onmouseleave = () => {
            //             for (let k : number = 0; k < mouseOverHexes.length; k++) {
            //                 if (mouseOverHexes[k]![0] == i && mouseOverHexes[k]![1] == j) {
            //                     mouseOverHexes.splice(k, 1);
            //                 }
            //             }
            //             hexesHolders[i]![j]!.classList.remove("opacity0");
            //             console.log(`MouseLeave ${i} ${j}`); 
            //         }
        }


    }
}

makeHexes();
window.addEventListener("resize", makeHexes);






















// let baseHex : HTMLImageElement = document.createElement('img')
// let hexes : HTMLImageElement[][] = [...Array(10)].map(() => Array(10));
// let hexesHolders : HTMLDivElement[][] = [...Array(10)].map(() => Array(10));

// baseHex.id = "hex"
// baseHex.className = "absolute transform-gpu" //h-52 w-52
// baseHex.src = "/imgs/hexagon.svg"
// let factor : number = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920)) * 1.5
// baseHex.width = 180.620956 * factor
// baseHex.height = 208 * factor
// baseHex.alt = "Hexagon"
// let hexStyle : HTMLStyleElement = document.createElement('style')
// hexStyle.id = "hexStyle"
// document.body.append(hexStyle)

// let mouseOverHexes : number[][] = [];
// let currentMouseOverHex : number[] = [];

// hexStyle.append(`
// .opacity0 {
//     opacity: 0;
// }
// `)

// for (let i : number = 0; i < 10; i++) {
//     for (let j : number = 0; j < 10; j++) {

//         hexes[i]![j] = baseHex.cloneNode()! as HTMLImageElement
//         hexes[i]![j]!.id = `hex${i}_${j}`

//         hexesHolders[i]![j] = document.createElement('div') as HTMLDivElement
//         hexesHolders[i]![j]!.id = `hexHolder${i}_${j}`

//         hexStyle.append(`#hex${i}_${j} {
//                             left: ${(i - (.96 * factor)) * (factor * 11.25) + (j % 2 == 0 ? (5.625 * factor) : 0)}rem; 
//                             top: ${(j - (factor * .23)) * (factor * 9.7)}rem; 
//                         }`)

//         document.getElementById("hexContainer")!.appendChild(hexesHolders[i]![j]!)
//         document.getElementById(`hexHolder${i}_${j}`)!.appendChild(hexes[i]![j]!)


//         hexes[i]![j]!.onmouseenter = () => {
//             mouseOverHexes.push([i, j]);
//             hexesHolders[i]![j]!.classList.add("opacity0");
//             console.log(`MouseEnter ${i} ${j}`);
//         }

//         hexes[i]![j]!.onmouseleave = () => {
//             for (let k : number = 0; k < mouseOverHexes.length; k++) {
//                 if (mouseOverHexes[k]![0] == i && mouseOverHexes[k]![1] == j) {
//                     mouseOverHexes.splice(k, 1);
//                 }
//             }
//             hexesHolders[i]![j]!.classList.remove("opacity0");
//             console.log(`MouseLeave ${i} ${j}`); 
//         }
//     }
// }