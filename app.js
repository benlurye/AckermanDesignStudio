$(document).ready(function(){

	const contactForm = document.querySelector("#my-form");
	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.reset();
	});

});