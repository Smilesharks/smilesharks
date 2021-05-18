ScrollReveal().reveal('.ocuspocus-1', { duration: 1500, delay: 500 });
ScrollReveal().reveal('.ocuspocus-2', { duration: 1500, delay: 1000 });
ScrollReveal().reveal('.ocuspocus-3', { duration: 1500, delay: 1500 });
ScrollReveal().reveal('.ocuspocus-4', { duration: 1500, delay: 2000 });
ScrollReveal().reveal('.abracadabra', { duration: 1500, origin: 'bottom', delay: 500 });
ScrollReveal().reveal('.tile, .skills-item, .skills-icon', { interval: 200, scale: 0.85, });


var	animation = bodymovin.loadAnimation({
	container: document.getElementById('kiora'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: '../assets/lottie/data.json'
})
var	animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: '../assets/lottie/ac.json'
})
var	animation = bodymovin.loadAnimation({
	container: document.getElementById('link'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'https://assets9.lottiefiles.com/packages/lf20_ozmeOp/Minimize.json'
})