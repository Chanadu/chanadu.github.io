let colorHighlight = document.getElementById('color-highlight');

colorHighlight.style.opacity = 0;

document.addEventListener('mousemove', moveHighlight); 
document.addEventListener('touchmove', moveHighlight); 

function moveHighlight(e) {
    if (colorHighlight.style.opacity == 0) {
        colorHighlight.style.opacity = 1;
    }

    let left = e.offsetX;
    let top = e.offsetY;
    colorHighlight.style.left = left + 'px';
    colorHighlight.style.top = top + 'px';
}

document.body.addEventListener("mouseleave", (e) => colorHighlight.style.opacity = 0);
document.body.addEventListener("touchcancel", (e) => colorHighlight.style.opacity = 0);
document.body.addEventListener("touchend", (e) => colorHighlight.style.opacity = 0);