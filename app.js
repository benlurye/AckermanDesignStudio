$(document).ready(function(){
	
	function hideContact() {
		document.querySelector(".contact-box").classList.toggle("hidden");
		document.querySelector("body").classList.toggle("contact-body-blur");
	}

    
    document.querySelector(".contact-activate-button").addEventListener("click", hideContact);

	document.querySelector("#mdiv").addEventListener("click", hideContact);

	document.querySelector(".form-submit-button").addEventListener("submit", function(event) {
		event.preventDefault();
        // console.log(event.target);
		// window.alert("Thank you for your message. We will be in touch shortly.");
		hideContact;
	});
});