"use strict";

var colorHighlight = document.getElementById('color-highlight');
colorHighlight.style.opacity = 0;
document.addEventListener('mousemove', moveHighlight);
document.addEventListener('touchmove', moveHighlight);

function moveHighlight(e) {
  if (colorHighlight.style.opacity == 0) {
    colorHighlight.style.opacity = 1;
  }

  var left = e.offsetX;
  var top = e.offsetY;
  colorHighlight.style.left = left + 'px';
  colorHighlight.style.top = top + 'px';
}

document.body.addEventListener("mouseleave", function (e) {
  return colorHighlight.style.opacity = 0;
});
document.body.addEventListener("touchcancel", function (e) {
  return colorHighlight.style.opacity = 0;
});
document.body.addEventListener("touchend", function (e) {
  return colorHighlight.style.opacity = 0;
});