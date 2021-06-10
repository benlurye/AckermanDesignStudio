$(document).ready(function(){

	const contactForm = document.querySelector("#my-form");
	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.reset();
		// window.alert("Thank you for your submission! We'll be in touch soon.");
	});

});