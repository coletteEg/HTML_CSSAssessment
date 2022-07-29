console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector("img")

let pictureAlert = () => {
	alert("You're more cultured than a yogurt wearing a tiny monocle")
}
picture.addEventListener("mouseover", pictureAlert)