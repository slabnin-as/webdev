"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var noteList = document.getElementById("todo-list");

    var button = document.getElementById("add-note");
    button.addEventListener("click", function (e){
        var inputText = document.getElementById("input-field").value;

        if(inputText === ""){
            return;
        }

        var note = document.createElement("li");
        note.innerHTML = inputText + "<button type='button' style='margin-left: 40px'>X</button>" +
                                        "<button type='button'>Редактировать</button>";
        noteList.appendChild(note);

        var deleteButton = note.children[0];
        deleteButton.addEventListener("click", function(e){
            noteList.removeChild(note);
        });

        var editButton = note.children[1];
        editButton.addEventListener("click", function(e){
            note.innerHTML = "<input type='text'><button type='button' class='buttons'>Отменить</button>" +
                                                 "<button type='button' class='buttons'>Сохранить</button>";

        });

    });

});