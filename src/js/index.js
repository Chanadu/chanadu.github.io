let colorHighlight = document.getElementById('color-highlight');

colorHighlight.style.opacity = 0;

document.addEventListener('mousemove', function (e) {
    if (colorHighlight.style.opacity == 0) {
        colorHighlight.style.opacity = 1;
    }

    let left = e.offsetX;
    let top = e.offsetY;
    colorHighlight.style.left = left + 'px';
    colorHighlight.style.top = top + 'px';
});

document.body.addEventListener("mouseleave", function(event){
        colorHighlight.style.opacity = 0;
  });