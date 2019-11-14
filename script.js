//when the button that corresponds with this code is clicked, everything affected will change to "Nether"
function changeNether(color) {
   document.getElementById("title").style.backgroundColor = "#B22222";
   document.getElementById("containa").style.backgroundColor = "#800000";
   document.getElementById("baybee").style.backgroundColor = "#783c00";
   document.getElementById("containa2").style.backgroundColor = "#800000";
   document.getElementById("baybee2").style.backgroundColor = "#783c00";
}

//when the button that corresponds with this code is clicked, everything affected will change to "Overworld"
function changeOverworld(color) {
	document.getElementById("title").style.backgroundColor = "green";
	document.getElementById("containa").style.backgroundColor = "#655421";
	document.getElementById("baybee").style.backgroundColor = "#755553";
	document.getElementById("containa2").style.backgroundColor = "#655421";
	document.getElementById("baybee2").style.backgroundColor = "#755553";
}

//when the button that corresponds with this code is clicked, everything affected will change to "End"
function changeEnd(color) {
	document.getElementById("title").style.backgroundColor = "black";
	document.getElementById("containa").style.backgroundColor = "#4d004d";
	document.getElementById("baybee").style.backgroundColor = "#FEFCD7";
	document.getElementById("containa2").style.backgroundColor = "#4d004d";
	document.getElementById("baybee2").style.backgroundColor = "#FEFCD7";
}