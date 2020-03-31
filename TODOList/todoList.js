"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var noteList = document.getElementById("todo-list");
    var inputText = document.getElementById("input-field");
    var button = document.getElementById("add-note");

    button.addEventListener("click", function () {
        var newText = inputText.value.trim();

        if (newText === "") {
            return;
        }

        var note = document.createElement("li");

        function addNote(text) {
            note.innerHTML = "<span></span><button type='button' class='delete-button'>Удалить</button>" +
                "<button type='button' class='button'>Редактировать</button>";

            var textLine = note.children[0];
            textLine.textContent = text;

            var deleteButton = note.children[1];
            deleteButton.addEventListener("click", function () {
                noteList.removeChild(note);
            });

            var editButton = note.children[2];
            editButton.addEventListener("click", function () {
                note.innerHTML = "<input type='text'><button type='button' class='button'>Отменить</button>" +
                    "<button type='button' class='button'>Сохранить</button>";

                var editTextLine = note.children[0];
                editTextLine.value = text;

                var cancelButton = note.children[1];
                cancelButton.addEventListener("click", function () {
                    addNote(text);
                });

                var saveButton = note.children[2];
                saveButton.addEventListener("click", function () {
                    var editingText = editTextLine.value.trim();

                    if (editingText === "") {
                        alert("Заметка не может быть пустой!");
                        editTextLine.focus();
                        return;
                    }

                    addNote(editingText);
                });
            });
        }

        addNote(newText);
        inputText.value = "";
        inputText.focus();

        noteList.appendChild(note);
    });
});