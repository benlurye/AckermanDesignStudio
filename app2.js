document.addEventListener("DOMContentLoaded", function() {

    const logo = document.querySelector(".logo");

// root is the browser viewport / screen
var darken = new IntersectionObserver(function(entries) {
	// since there is a single target to be observed, there will be only one entry
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] === 1)
			console.log('Target is fully visible in the screen');
            logo.classList.add("dark");
	}
}, { threshold: [0, 0.5, 1] });

var lighten = new IntersectionObserver(function(entries) {
	// since there is a single target to be observed, there will be only one entry
	if(entries[0]['isIntersecting'] === true) {
		if(entries[0]['intersectionRatio'] === 1)
			console.log('Target is fully visible in the screen');
            logo.classList.remove("dark");
	}
}, { threshold: [0, 0.5, 1] });

lighten.observe(document.querySelector("#one"));
darken.observe(document.querySelector("#two"));
darken.observe(document.querySelector("#three"));
lighten.observe(document.querySelector("#four"));
darken.observe(document.querySelector("#five"));

// we want for 2, 3, 5 to be dark for now

})