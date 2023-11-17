console.log("Hello World")

function setMultipleAttributes(elem: SVGSVGElement | SVGPathElement, attributes: any): void {
    Object.keys(attributes).forEach(attribute => {
        elem.setAttribute(attribute, attributes[attribute])
    })
}

function makeHexStyle(): void {
    // console.log("resize")
    if (!document.getElementById("hexStyle")) {
        hexStyle = document.createElement('style')
        hexStyle.id = "hexStyle"
    }
    factor = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920))
    hexStyle.innerHTML = "";
    hexStyle.append(`    
        #hexContainer {
            transform: scale(${.85 * factor})
        }
    `)

    for (let i: number = 0; i < hexes.length; i++) {
        for (let j: number = 0; j < hexes[i]!.length; j++) {
            addHexStyleSVGPositions(i, j)
        }
    }
}
window.onresize = makeHexStyle

function addHexStyleSVGPositions(i: number, j: number): void {

    hexStyle.append(`#hex${i}_${j} {
        left: ${i * 20.4 + (j % 2 == 0 ? 0 : 10.2) - 11.5}rem; 
            top: ${j * 17.7 - 8}rem;
        }`) // DONT CHANGE NUMBERS
}

function getOffset(element: SVGPathElement | SVGSVGElement) {
    var bound = element.getBoundingClientRect()
    var html = document.documentElement

    return {
        top: bound.top + window.pageYOffset - html.clientTop,
        left: bound.left + window.pageXOffset - html.clientLeft,
    }
}


let factor: number = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920))

let baseHexSvg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg") // Base
let baseHexPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path') // Blue Outline
let baseHexPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path') // Gray Inside
let baseHexPath3 = document.createElementNS("http://www.w3.org/2000/svg", 'path') // Transparent Overlay

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
}
let pathAttributes1 = {
    "sodipodi:type": "star",
    "style": "fill:none;fill-opacity:1;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
}
let pathAttributes2 = {
    "sodipodi:type": "star",
    "style": "fill:#323237;fill-opacity:1;stroke:none;stroke-opacity:1",
    "id": "path4292",
    "d": "m 165.59044,21.51548 149.81143,86.49368 0,172.98735 -149.81144,86.49367 -149.81144,-86.49368 5e-6,-172.98735 z",
    "transform": "matrix(0.26458333,0,0,0.26458333,-0.39396904,-1.4622067)",
}
let pathAttributes3 = {
    "sodipodi:type": "star",
    "style": "fill:#000000;fill-opacity:0;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
}

setMultipleAttributes(baseHexSvg, svgAtributes)
setMultipleAttributes(baseHexPath1, pathAttributes1)
setMultipleAttributes(baseHexPath2, pathAttributes2)
setMultipleAttributes(baseHexPath3, pathAttributes3)

baseHexSvg.classList.add(...["pointer-events-none"])
baseHexPath3.classList.add(...["pointer-events-auto"])

baseHexSvg.appendChild(baseHexPath1)
baseHexSvg.appendChild(baseHexPath2)
baseHexSvg.appendChild(baseHexPath3)

let hoverHexSvg: SVGSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg") // Base
let hoverHexPath = document.createElementNS("http://www.w3.org/2000/svg", 'path') // Blue Outline
let hoverSvgAtributes = {
    "width": "86.836998mm",
    "height": "100mm",
    "viewBox": "0 0 86.836998 100",
    "version": "1.1",
    "id": "svg5",
    "inkscape:version": "1.1.2 (0a00cf5339, 2022-02-04)",
    "sodipodi:docname": "hexagonHover.svg",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    "class": "absolute transform-gpu",
}
let hoverPathAttributes = {
    "sodipodi:type": "star",
    "style": "fill:#00ffff;fill-opacity:1",
    "id": "path4167",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
}
setMultipleAttributes(hoverHexSvg, hoverSvgAtributes)
setMultipleAttributes(hoverHexPath, hoverPathAttributes)

hoverHexSvg.appendChild(hoverHexPath)
hoverHexSvg.id = "hoverHexSvg"
let hexHoverEffect = document.getElementById('hexHoverEffect')
hexHoverEffect!.appendChild(hoverHexSvg)


let hexes: SVGSVGElement[][] = [...Array(10)].map(() => Array(10))
let hexesHolders: HTMLDivElement[][] = [...Array(10)].map(() => Array(10))
let hexesMouseOver: number[][] = []

let hexStyle: HTMLStyleElement
let hexHoverStyle: HTMLStyleElement = document.createElement('style')
makeHexStyle()
document.body.append(hexStyle!)
document.body.append(hexHoverStyle)


for (let i: number = 0; i < hexes.length; i++) {
    for (let j: number = 0; j < hexes[i]!.length; j++) {
        hexes[i]![j] = baseHexSvg.cloneNode(true)! as SVGSVGElement
        let hex: SVGSVGElement = hexes[i]![j]!
        hex.id = `hex${i}_${j}`
        hexesHolders[i]![j] = document.createElement('div') as HTMLDivElement
        hexesHolders[i]![j]!.id = `hexHolder${i}_${j}`

        document.getElementById("hexContainer")!.appendChild(hexesHolders[i]![j]!)
        document.getElementById(`hexHolder${i}_${j}`)!.appendChild(hex)

        let innerHexPath: SVGPathElement = hex.children[2] as SVGPathElement
        innerHexPath.onmouseenter = () => {
            if (hexHoverEffect!.classList.contains('opacity-0')) {
                hexHoverEffect!.classList.remove('opacity-0')
            }
            hexesMouseOver.push([i, j])
            hexHoverStyle.innerHTML = ""
            hexHoverStyle.append(`
                #hexHoverEffect {
                    left: ${i * 20.4 + (j % 2 == 0 ? 0 : 10.2) - 11.5}rem;
                    top: ${j * 17.7 - 8}rem;
                }
            `)
            // hex.classList.add("opacity-0")
        };
        innerHexPath.onmouseleave = () => {
            for (let k = 0; k < hexesMouseOver.length; k++) {
                if (hexesMouseOver[k]![0] == i && hexesMouseOver[k]![1] == j) {
                    hexesMouseOver.splice(k, 1)
                    // hex.classList.remove("opacity-0")
                    break
                }
            }
        }
    }
}

// document.onmousemove = (e) => {
//     let mousePosition = {
//         x: e.clientX,
//         y: e.clientY,
//     }
//     getOffset
//     hexHoverEffect!.style.left = (mousePosition.x - hoverHexPath.getBoundingClientRect().width / 2) + "px"
//     hexHoverEffect!.style.top = (mousePosition.y - hoverHexPath.getBoundingClientRect().height / 2) + "px"
//     console.log()
// }
