"use strict";

document.addEventListener("DOMContentLoaded", function () {
var celsius = document.getElementById("input-celsius");
var fahrenheit = document.getElementById("output-fahrenheit");
var kelvin = document.getElementById("output-kelvin");

var button = document.getElementById("convert-button");
button.addEventListener("click", function(e){
    var inputTemp = celsius.value;

    if(isNaN(inputTemp) || inputTemp === ""){
        celsius.value = "";
        fahrenheit.value = "";
        kelvin.value = "";
        alert("Введите число!!!");
        return;
    }

    fahrenheit.value = +inputTemp*9/5 + 32;
    kelvin.value = +inputTemp+273.15;
});
});