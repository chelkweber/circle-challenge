//find area with radius
function createCircle(radius) {
	var scene = document.getElementById("scene");
	scene.style.display = "inline";
	//get radius value from input
	radius = document.getElementById("radius").value;
	//initialize variable area
	var area = document.getElementById("area");
	//square radius
	var r2 = radius * radius;
	//find value of pi
	var pi = Math.PI;
	//set area display to pi*rsqrd
	area.innerText = pi * r2;
	//initialize variable for circle
	var circle = document.getElementById("circle");
	//change size of circle div
	circle.style.width = 2 * radius + "px";
	circle.style.height = 2 * radius + "px";
	circle.style.marginLeft = -(radius) + "px";
}

