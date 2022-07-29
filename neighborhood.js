let foodButton = document.querySelector("#eat")

let array = ["La Casita", "Ginger's Cafe", "Strap Tank Brewery", "The Sidecar Cafe", "Art City Trolley", "Pier 49 Pizza"]

let body = document.querySelector("main")
let randomFood = () => {
    let newP = document.createElement("p");
    newP.textContent = array[Math.floor(Math.random() * array.length)];
    body.appendChild(newP)
}

foodButton.addEventListener("click", randomFood)