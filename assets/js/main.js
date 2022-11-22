// Variablen

let message = document.querySelector(".message");
let p = document.getElementById("paragraph");
let countdownAusgabe = document.querySelector("#count");
count = 10;

// Funktion

window.onload = () => {
	function countdown() {
		console.log(count);
		countdownAusgabe.innerHTML = count;
		count--;
		if (count < 0) {
            clearInterval(interval)
			message.style.opacity = "0";
			p.style.opacity = "0";
		}
	}
	let interval = setInterval(countdown, 500);
};
