"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
console.log("Hello World");
function setMultipleAttributes(elem, attributes) {
    Object.keys(attributes).forEach(function (attribute) {
        elem.setAttribute(attribute, attributes[attribute]);
    });
}
function makeHexStyle() {
    if (!document.getElementById("hexStyle")) {
        hexStyle = document.createElement('style');
        hexStyle.id = "hexStyle";
    }
    factor = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920));
    hexStyle.append("    \n        #hexContainer {\n            transform: scale(".concat(.85 * factor, ");\n        }\n    "));
    for (var i = 0; i < hexes.length; i++) {
        for (var j = 0; j < hexes[i].length; j++) {
            addHexStyleSVGPositions(i, j);
        }
    }
}
window.onresize = makeHexStyle;
function addHexStyleSVGPositions(i, j) {
    hexStyle.append("#hex".concat(i, "_").concat(j, " {\n        left: ").concat(i * 20.4 + (j % 2 == 0 ? 0 : 10.2) - 11.5, "rem; \n            top: ").concat(j * 17.7 - 8, "rem;\n        }"));
}
function getOffset(element) {
    var bound = element.getBoundingClientRect();
    var html = document.documentElement;
    return {
        top: bound.top + window.pageYOffset - html.clientTop,
        left: bound.left + window.pageXOffset - html.clientLeft,
    };
}
var factor = Math.max((window.screen.availWidth / 1920), (window.screen.availHeight / 1920));
var baseHexSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var baseHexPath1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
var baseHexPath2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
var baseHexPath3 = document.createElementNS("http://www.w3.org/2000/svg", 'path');
var svgAtributes = {
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
var pathAttributes1 = {
    "sodipodi:type": "star",
    "style": "fill:none;fill-opacity:1;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
};
var pathAttributes2 = {
    "sodipodi:type": "star",
    "style": "fill:#323237;fill-opacity:1;stroke:none;stroke-opacity:1",
    "id": "path4292",
    "d": "m 165.59044,21.51548 149.81143,86.49368 0,172.98735 -149.81144,86.49367 -149.81144,-86.49368 5e-6,-172.98735 z",
    "transform": "matrix(0.26458333,0,0,0.26458333,-0.39396904,-1.4622067)",
};
var pathAttributes3 = {
    "sodipodi:type": "star",
    "style": "fill:#000000;fill-opacity:0;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
};
setMultipleAttributes(baseHexSvg, svgAtributes);
setMultipleAttributes(baseHexPath1, pathAttributes1);
setMultipleAttributes(baseHexPath2, pathAttributes2);
setMultipleAttributes(baseHexPath3, pathAttributes3);
(_a = baseHexSvg.classList).add.apply(_a, ["pointer-events-none"]);
(_b = baseHexPath3.classList).add.apply(_b, ["pointer-events-auto"]);
baseHexSvg.appendChild(baseHexPath1);
baseHexSvg.appendChild(baseHexPath2);
baseHexSvg.appendChild(baseHexPath3);
var hoverHexSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var hoverHexPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
var hoverSvgAtributes = {
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
var hoverPathAttributes = {
    "sodipodi:type": "star",
    "style": "fill:#00ffff;fill-opacity:1;stroke:#00ffff;stroke-opacity:1",
    "id": "path4166",
    "d": "m 156.78449,-8.830696 163.60149,94.455365 -1e-5,188.910721 -163.60149,94.45536 ,-163.6014763,-94.45537 5e-6,-188.91072 z",
    "transform": "matrix(0.26458432,0,0,0.26386776,1.9357815,2.4826872)",
};
setMultipleAttributes(hoverHexSvg, hoverSvgAtributes);
setMultipleAttributes(hoverHexPath, hoverPathAttributes);
hoverHexSvg.appendChild(hoverHexPath);
var hexHoverEffect = document.getElementById('hexHoverEffect');
hexHoverEffect.appendChild(hoverHexSvg);
var hexes = __spreadArray([], Array(10), true).map(function () { return Array(10); });
var hexesHolders = __spreadArray([], Array(10), true).map(function () { return Array(10); });
var hexesMouseOver = [];
var hexStyle;
makeHexStyle();
document.body.append(hexStyle);
var _loop_1 = function (i) {
    var _loop_2 = function (j) {
        hexes[i][j] = baseHexSvg.cloneNode(true);
        hexes[i][j].id = "hex".concat(i, "_").concat(j);
        hexesHolders[i][j] = document.createElement('div');
        hexesHolders[i][j].id = "hexHolder".concat(i, "_").concat(j);
        document.getElementById("hexContainer").appendChild(hexesHolders[i][j]);
        document.getElementById("hexHolder".concat(i, "_").concat(j)).appendChild(hexes[i][j]);
        var innerHexPath = hexes[i][j].children[2];
        innerHexPath.onmouseenter = function () {
            hexesMouseOver.push([i, j]);
        };
        innerHexPath.onmouseleave = function () {
            for (var k = 0; k < hexesMouseOver.length; k++) {
                if (hexesMouseOver[k][0] == i && hexesMouseOver[k][1] == j) {
                    hexesMouseOver.splice(k, 1);
                    break;
                }
            }
        };
    };
    for (var j = 0; j < hexes[i].length; j++) {
        _loop_2(j);
    }
};
for (var i = 0; i < hexes.length; i++) {
    _loop_1(i);
}
document.onmousemove = function (e) {
    var mousePosition = {
        x: e.clientX,
        y: e.clientY,
    };
    getOffset;
    hexHoverEffect.style.left = (mousePosition.x - hoverHexPath.getBoundingClientRect().width / 2) + "px";
    hexHoverEffect.style.top = (mousePosition.y - hoverHexPath.getBoundingClientRect().height / 2) + "px";
    console.log();
};
//# sourceMappingURL=index.js.map