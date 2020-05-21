// Testing if the js is connected
console.log("ppp");


// Chnaging the image
// Getting the image


// Updating the dom


// Getting the submit button
var submitButton = document.getElementById('submit');

// Onclick function
submitButton.onclick = function () {
    // Test
    console.log("OLOOOO");

    // Getting the image to replace
    cardImage = document.getElementById("cardImg");

    // Getting the form value
    var imageOption = document.getElementById("image").value;

    if (imageOption = "birthday"){
        cardImage.src = "assets/birthday.jpg";
    }

    if (imageOption = "valentines"){
        cardImage.src = "assets/valentines.jpg";
    }

    if (imageOption = "christmas"){
        cardImage.src = "assets/christmas.jpg";
    }



    // Chnaging the background colour
    // getting the card to change
    background = document.getElementById("card");

    // Getting the value from the form
    var backgroundOption = document.getElementById("background").value;
    background.classList.remove("roseBackground");
    background.classList.remove("celadonBackground");
    background.classList.remove("graphiteBackground");

    // If statements for each option
    if (backgroundOption = "celadon") {
        background.classList.add("celadonBackground");
    }

    if (backgroundOption = "graphite") {
        background.classList.add("graphiteBackground");
    }

    if (backgroundOption = "rose") {
        background.classList.add("roseBackground");
    }


}
