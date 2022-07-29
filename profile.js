let favoriteButton = document.querySelector("#color")
let placeButton = document.querySelector("#place")
let ritualButton = document.querySelector("#ritual")

let favoriteAlert = () => {
    alert("Yellow! Because it is such a bright and cheery color.")
}

let placeAlert = () => {
    alert("The beach... but it has to be a warm beach. Not a cold and dreary beach.")
}

let ritualAlert = () => {
    alert("Opening the blinds every morning to let in the sunlight. Something about it is so simple and beautiful.")
}

favoriteButton.addEventListener("click", favoriteAlert)
placeButton.addEventListener("click", placeAlert)
ritualButton.addEventListener("click", ritualAlert)