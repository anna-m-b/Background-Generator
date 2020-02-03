var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var random = document.querySelector("#random");

document.addEventListener('click', function(event) {
	if (event.target.matches('#random')) {
		setRandomColor();

}
});

css.textContent = 

	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")"
	+ ";";


function setGradient () {
	body.style.background =  
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")";

	css.textContent =  body.style.background + ";";
}
 // problem: not working after user sets own

function getRandomColor1() {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomColor2() {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor () {

	// didn't work //
	// color1.setAttribute("value", getRandomColor1());
	// color2.setAttribute("value", getRandomColor2());
	// setGradient();

	// works //
	color1.value = getRandomColor1();
	color2.value = getRandomColor2();
	setGradient();
}




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// random.addEventListener("click", setRandomColor);



// A few things you can try:

// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

// You may also see different behaviours with the Color widget based on what browser you use. 

// Remember, all browsers are implemented differently. Good luck!