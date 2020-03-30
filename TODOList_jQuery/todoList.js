$(function () {
    $("#add-note").click(function () {
        var userInputField = $("#input-field");
        var inputText = userInputField.val();

        if (inputText === "") {
            return;
        }

        var note = $("<li>");

        function addNote(text) {
            note.html("<span></span><button type='button' class='delete-button'>Удалить</button>" +
                "<button type='button' class='edit-button'>Редактировать</button>");

            note.children("span").text(text);

            note.children(".delete-button").click(function () {
                note.remove();
            });

            note.children(".edit-button").click(function () {
                note.html("<input type='text'><button type='button' class='cancel-button'>Отменить</button>" +
                    "<button type='button' class='save-button'>Сохранить</button>");

                note.children("input[type=text]").val(text);

                note.children(".cancel-button").click(function () {
                    addNote(text);
                });

                note.children(".save-button").click(function () {
                    var newText = note.children("input[type=text]").val();
                    addNote(newText);
                });
            });
        }

        addNote(inputText);
        userInputField.val("");
        userInputField.focus();

        $("#todo-list").append(note);
    });
});