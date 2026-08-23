// Get elements from HTML

var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var colorInput = document.getElementById("color");

var number1Input = document.getElementById("number1");
var number2Input = document.getElementById("number2");

var generateButton = document.getElementById("generateButton");
var themeButton = document.getElementById("themeButton");

var profile = document.getElementById("profile");
var welcome = document.getElementById("welcome");
var greeting = document.getElementById("greeting");
var profileAge = document.getElementById("profileAge");
var profileColor = document.getElementById("profileColor");

var colorPreview = document.getElementById("colorPreview");

var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");


// Boolean Data Type

var darkMode = false;


// Generate Profile Button

generateButton.onclick = function () {

    // String Data Type

    var userName = nameInput.value;
    var favoriteColor = colorInput.value;


    // Number Data Type

    var userAge = Number(ageInput.value);
    var firstNumber = Number(number1Input.value);
    var secondNumber = Number(number2Input.value);


    // Welcome Message

    welcome.innerHTML =
        "Welcome, " + userName + "!";


    // Personalized Greeting

    greeting.innerHTML =
        "Hello " +
        userName +
        "! You are " +
        userAge +
        " years old. Nice to meet you!";


    // Display Age

    profileAge.innerHTML =
        "🎂 Your age is: " +
        userAge;


    // Display Favorite Color

    profileColor.innerHTML =
        "🎨 Your favorite color is: " +
        favoriteColor;


    // Favorite Color Preview

    colorPreview.innerHTML =
        "🎨 Your favorite color: " +
        favoriteColor;

    colorPreview.style.backgroundColor =
        favoriteColor;


    // Calculator - Addition

    addition.innerHTML =
        "➕ Addition: " +
        (firstNumber + secondNumber);


    // Calculator - Subtraction

    subtraction.innerHTML =
        "➖ Subtraction: " +
        (firstNumber - secondNumber);


    // Calculator - Multiplication

    multiplication.innerHTML =
        "✖️ Multiplication: " +
        (firstNumber * secondNumber);


    // Calculator - Division

    if (secondNumber != 0) {

        division.innerHTML =
            "➗ Division: " +
            (firstNumber / secondNumber);

    } else {

        division.innerHTML =
            "➗ Division: Cannot divide by zero";
    }


    // Change Profile Border Color

    profile.style.borderLeftColor =
        favoriteColor;
};


// Dark Mode / Light Mode

themeButton.onclick = function () {

    if (darkMode == false) {

        darkMode = true;

        document.body.classList.add("dark-mode");

        themeButton.innerHTML =
            "☀️ Light Mode";

    } else {

        darkMode = false;

        document.body.classList.remove("dark-mode");

        themeButton.innerHTML =
            "🌙 Dark Mode";
    }
};
