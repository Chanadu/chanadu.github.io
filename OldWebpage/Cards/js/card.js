var cards = document.getElementsByClassName('card');
var smallCardHolder = document.getElementById('small-card-holder');
var mainCardHolder = document.getElementById('main-card-holder');
var currentMainCard;
var _loop_1 = function (i) {
    console.log("test");
    var card = cards[i];
    if (card instanceof HTMLElement) {
        card.onclick = function () {
            console.log(card.id);
            makeMainCard(card);
        };
    }
    else {
        console.log(card.id);
    }
};
for (var i = 0; i < cards.length; i++) {
    _loop_1(i);
}
function makeMainCard(mainCard) {
    if (currentMainCard == mainCard) {
        setCardState(mainCard, "small");
        currentMainCard = null;
        return;
    }
    if (!Array.from(cards).includes(mainCard)) {
        console.error("makeMainCard was not given a card");
        return;
    }
    currentMainCard = mainCard;
    for (var i = 0; i < cards.length; i++) {
        setCardState(cards[i], "small");
    }
    setCardState(mainCard, "main");
}
function setCardState(card, state) {
    if (!card.classList.contains('card')) {
        console.error("Not card in setCardState");
    }
    if (state == "small") {
        if (card.classList.contains("main-card")) {
            card.classList.remove('main-card');
            card.classList.add('small-card');
            smallCardHolder.appendChild(card);
        }
    }
    else {
        if (card.classList.contains("small-card")) {
            card.classList.remove('small-card');
            card.classList.add('main-card');
            mainCardHolder.appendChild(card);
        }
    }
    if (mainCardHolder.children.length != 0) {
        if (mainCardHolder.classList.contains('big-border')) {
            mainCardHolder.classList.remove('big-border');
        }
    }
    else {
        if (!mainCardHolder.classList.contains('big-border')) {
            mainCardHolder.classList.add('big-border');
        }
    }
}
