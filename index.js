const indicator = document.querySelector("div");
const input = document.querySelector("input");

let interval;
let count = 0;

input.oninput = () => {
	clearInterval(interval);
	indicator.style.rotate = "0";

	if (!input.value) return;

	const ms = +input.value;
	if (Number.isNaN(ms) || ms < 100) return;

	interval = setInterval(() => {
		requestAnimationFrame(() => {
			indicator.style.rotate = `${count++ * 0.125}turn`;
		});
	}, ms);
};
