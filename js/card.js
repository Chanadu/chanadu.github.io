var cards = document.getElementsByClassName('card');


console.log(cards);

for (let card of cards) {
	console.log(card.id);
	for (let c of cards) {
		if (c.classList.contains('card-animation')) {
			c.classList.remove('card-animation');
		}
	}
	card.onclick = () => {
		for (let c of cards) {
			if (c.classList.contains('card-animation')) {
				c.classList.remove('card-animation');
			}
		}

		card.classList.add('card-animation');
	}
}