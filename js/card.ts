let cards = document.getElementsByClassName('card');
let smallCardHolder = document.getElementById('small-card-holder');
let mainCardHolder = document.getElementById('main-card-holder');
let currentMainCard: HTMLElement;

for (let i = 0; i < cards.length; i++) {
	console.log("test");
	const card = cards[i];
	if (card instanceof HTMLElement) {
		card.onclick = () => {
			console.log(card.id);
			makeMainCard(card);
		}
	} else {
		console.log(card.id);
	}
}

function makeMainCard(mainCard: HTMLElement): void {
	if (currentMainCard == mainCard) {
		setCardState(mainCard as HTMLElement, "small");
		currentMainCard = null;
		return;
	}
	if (!Array.from(cards).includes(mainCard)) {
		console.error("makeMainCard was not given a card");
		return;
	}
	currentMainCard = mainCard;

	for (let i = 0; i < cards.length; i++) {
		setCardState(cards[i] as HTMLElement, "small");
	}


	setCardState(mainCard, "main");

}

function setCardState(card: HTMLElement, state: "small" | "main") {
	if (!card.classList.contains('card')) {
		console.error("Not card in setCardState");
	}
	if (state == "small") {
		if (card.classList.contains("main-card")) {
			card.classList.remove('main-card');
			card.classList.add('small-card');

			smallCardHolder.appendChild(card);
		}
	} else {
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
	} else {
		if (!mainCardHolder.classList.contains('big-border')) {
			mainCardHolder.classList.add('big-border');
		}
	}
}