"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var celsius = document.getElementById("input-celsius");
    var fahrenheit = document.getElementById("output-fahrenheit");
    var kelvin = document.getElementById("output-kelvin");

    var validationMessage = document.getElementById("validation-message");

    var button = document.getElementById("convert-button");
    button.addEventListener("click", function () {
        var inputCelsiusTemperature = celsius.value;

        if (isNaN(inputCelsiusTemperature) || inputCelsiusTemperature === "") {
            celsius.value = "";
            fahrenheit.value = "";
            kelvin.value = "";
            validationMessage.style.display = "block";
            return;
        }

        validationMessage.style.display = "none";
        fahrenheit.value = +inputCelsiusTemperature * 9 / 5 + 32;
        kelvin.value = +inputCelsiusTemperature + 273.15;
    });
});