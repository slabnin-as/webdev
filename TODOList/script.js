"use strict"

$(document).ready(function(){
    $("#add-button").click(function(e){
        var inputText = $(".input-group>input").val();

        var el = $("<button></button>")
            .attr("type", "button")
            .addClass("list-group-item list-group-item-action")
            .attr("data-toggle", "dropdown")
            .text(inputText);

        $("#drop-menu").before(el);
    });


})