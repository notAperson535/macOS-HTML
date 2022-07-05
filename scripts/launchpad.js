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