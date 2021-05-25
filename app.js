$(document).ready(function(){
	
	function hideContact() {
		document.querySelector(".contact-box").classList.toggle("hidden");
		document.querySelector("body").classList.toggle("contact-body-blur");
	}

    
    document.querySelector(".contact-activate-button").addEventListener("click", hideContact);

	document.querySelector("#mdiv").addEventListener("click", hideContact);

	});