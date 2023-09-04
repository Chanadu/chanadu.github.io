let player;

function startGame () {
	myGameArea.start();
	let canvas = myGameArea.canvas;
	player = new component(canvas.width / 2, canvas.height / 2, 30, 30, "#FFFFFF");
}

var myGameArea = {
	canvas : document.getElementById('game-canvas'),
	start : function() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.context = this.canvas.getContext("2d");
		this.interval = setInterval(updateGameArea, 24);
		window.addEventListener('keydown', function (e) {
			myGameArea.keys = (myGameArea.keys || []);
			myGameArea.keys[e.keyCode] = true;
		});
		window.addEventListener('keyup', function (e) {
			myGameArea.keys[e.keyCode] = false;
		});
	},
  	clear : function() {
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  	}
}

class component {
	constructor (x, y, width, height, color) {
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.speedX = 0;
		this.speedY = 0;
		this.update = function () {
			let ctx = myGameArea.context;
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		};

		this.newPos = function () {
			this.x += this.speedX;
			this.y += this.speedY;
		};
		this.collideWith = function (otherobj) {
			var myleft = this.x;
			var myright = this.x + (this.width);
			var mytop = this.y;
			var mybottom = this.y + (this.height);
			var otherleft = otherobj.x;
			var otherright = otherobj.x + (otherobj.width);
			var othertop = otherobj.y;
			var otherbottom = otherobj.y + (otherobj.height);
			var crash = true;
			if ((mybottom < othertop) ||
				(mytop > otherbottom) ||
				(myright < otherleft) ||
				(myleft > otherright)) {
				crash = false;
			}
			return crash;
  		}
	}
}

function updateGameArea () {
	myGameArea.clear();
	player.speedX = 0;
	player.speedY = 0;
	if (myGameArea.keys && (myGameArea.keys[37] || myGameArea.keys[65])) {
		player.speedX += -5;
	}
	if (myGameArea.keys && (myGameArea.keys[39] || myGameArea.keys[68])) {
		player.speedX += 5;
	}
	if (myGameArea.keys && (myGameArea.keys[38] || myGameArea.keys[87])) {
		player.speedY += -5;
	}
	if (myGameArea.keys && (myGameArea.keys[40] || myGameArea.keys[83])) {
		player.speedY += 5;
	}
	player.newPos();
  	player.update();
}