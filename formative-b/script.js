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

    if (imageOption === "birthday"){
        cardImage.src = "assets/birthday.jpg";
    }

    if (imageOption === "valentines"){
        cardImage.src = "assets/valentines.jpg";
    }

    if (imageOption === "christmas"){
        cardImage.src = "assets/christmas.jpg";
    } else {
        console.log("Image Error!")
    }



    // Chnaging the background colour
    // getting the card to change
    var background = document.getElementById("card");

    // Getting the value from the form
    var backgroundOption = document.getElementById("background").value;
    background.classList.remove("roseBackground");
    background.classList.remove("celadonBackground");
    background.classList.remove("graphiteBackground");

    // If statements for each option
    if (backgroundOption === "celadon") {
        background.classList.remove("graphiteBackground");
        background.classList.remove("roseBackground");
        background.classList.add("celadonBackground");
    }

    if (backgroundOption === "graphite") {
        background.classList.remove("celadonBackground");
        background.classList.remove("roseBackground");
        background.classList.add("graphiteBackground");
        console.log("Working")
    }

    if (backgroundOption === "rose") {
        background.classList.add("roseBackground");
    } else {
        console.log("Background Error!");
    }

    chooseFont();

    chooseBorder();

    printMessage();
}






function chooseFont() {
    var domFont = document.getElementById("h1");
    var fontOption = document.getElementById("font").value;

    domFont.classList.remove("handwriting");
    domFont.classList.remove("sketch");
    domFont.classList.remove("print");

    if (fontOption === "handwriting") {
        console.log("Handwriting");
        domFont.classList.add("handwriting");
    }

    if (fontOption === "sketch") {
        console.log("sketch");
        domFont.classList.add("sketch");
    }

    if (fontOption === "print") {
        console.log("print");
        domFont.classList.add("print");
    }
}





function chooseBorder() {
    var domBorder = document.getElementById("borderD");
    var borderOption = document.getElementById("border").value;

    domBorder.classList.remove("noBorder");
    domBorder.classList.remove("smallBorder");
    domBorder.classList.remove("bigBorder");
    domBorder.classList.remove("filledBorder");

    if (borderOption === "none") {
        console.log("none");
        domBorder.classList.add("noneBorder");
    }

    if (borderOption === "thin") {
        console.log("thin");
        domBorder.classList.add("smallBorder");
    }

    if (borderOption === "think") {
        console.log("think");
        domBorder.classList.add("bigBorder");
    }

    if (borderOption === "filled") {
        console.log("filled");
        domBorder.classList.add("filledBorder");
    }
}


function printMessage() {
    domMessage = document.getElementById("h1");
    message = document.getElementById("message").value;

    console.log(message)

    domMessage.textContent = message;
}
