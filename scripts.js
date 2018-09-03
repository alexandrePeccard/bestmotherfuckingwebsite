function changeMode() {
	var myElement = document.getElementById("invertmode");
	myElement.onclick = function(myElement) {
		var body = document.getElementById("body");

		if(body.style.backgroundColor == "white" || body.style.backgroundColor == "") {
			myElement.explicitOriginalTarget.data = "Normal mode ";
			body.style.backgroundColor="black";
			body.style.color="white";
		} else {
			myElement.explicitOriginalTarget.data = "Inverted mode ";
			body.style.backgroundColor="white";
			body.style.color="black";
		}
	}
}

function changeContrast() {
	var myElement = document.getElementById("changecontrast");
	myElement.onclick=function(myElement) {

		var body = document.getElementById("body");
		var contrast = body.style.filter;
		if(contrast == 'undefined' || contrast == null || contrast == false || contrast == "") {
			myElement.explicitOriginalTarget.data = "Remove extra contrast";
			body.style.filter = "contrast(50%)";
		} else {
			myElement.explicitOriginalTarget.data = "Add more contrast";
			body.style.filter = "";
		}
	}
}