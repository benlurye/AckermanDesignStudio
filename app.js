$(document).ready(function(){
    
    // hide contact form box on load
    // document.querySelector(".contact-box").classList.add('hidden');

    
    document.querySelector(".contact-activate-button").addEventListener("click", function()  {
        document.querySelector(".contact-box").classList.toggle("hidden");
    })
})