"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var noteList = document.getElementById("todo-list");
    var inputText = document.getElementById("input-field");
    var button = document.getElementById("add-note");

    button.addEventListener("click", function (e) {
        var newText = inputText.value;

        if (newText === "") {
            return;
        }

        var note = document.createElement("li");
        note.style.paddingBottom = "5px";
        addNote(newText);

        function addNote(text) {
            note.innerHTML = "<span></span><button type='button' style='margin-left: 40px;'>Удалить</button>" +
                "<button type='button' style='margin-left: 5px;'>Редактировать</button>";

            var textLine = note.children[0];
            textLine.textContent = text;

            var deleteButton = note.children[1];
            deleteButton.addEventListener("click", function (e) {
                noteList.removeChild(note);
            });

            var editButton = note.children[2];
            editButton.addEventListener("click", function (e) {
                note.innerHTML = "<input type='text'><button type='button' style='margin-left: 5px;'>Отменить</button>" +
                    "<button type='button' style='margin-left: 5px;'>Сохранить</button>";

                var editTextLine = note.children[0];

                var cancelButton = note.children[1];
                cancelButton.addEventListener("click", function (e) {
                    addNote(text);
                });

                var saveButton = note.children[2];
                saveButton.addEventListener("click", function (e) {
                    var editingText = editTextLine.value;
                    addNote(editingText);
                });

            });
        }

        noteList.appendChild(note);
    });
});