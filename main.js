let startCountdown = (duration, display) => {
	let countdown = duration;
	let minutes;
	let seconds;

	setInterval(() => {
		minutes = parseInt(countdown / 60, 10)
		seconds = parseInt(countdown % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.querySelector('[data-minutes]').textContent = minutes;
		display.querySelector('[data-seconds]').textContent = seconds;

		if (--countdown < 0) { countdown = 0 }
	}, 1000);
}

window.onload = () => {
	let duration = 15 * 60; // min × sec.
	let display = document.querySelector('[data-display]');
	startCountdown(duration, display);
};