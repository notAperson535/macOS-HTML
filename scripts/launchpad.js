let launchpad = document.getElementsByClassName("launchpad")[0]
let launchpadicon = document.getElementsByClassName("launchpadicon")[0]

launchpadicon.addEventListener("click", ()=>{

	if(launchpad.style.display == "flex"){
		launchpad.style.display = "none"
	}
	else{
		launchpad.style.display = "flex"
	}
})

window.addEventListener('mouseup', function(e) {
	if(event.target.closest(".launchpad") && !event.target.closest(".launchpadentry img")){
		launchpad.style.display = "none"
	}
});