$(function () {
    var contactsCount = 0;

    $(".contact-form").submit(function () {
        var name = $("#name").val();
        var surname = $("#surname").val();
        var phone = $("#phone").val();

        contactsCount++;
        var newContact = $("<tr>");

        newContact.html("<td></td><td></td><td></td><td></td>" +
            "<td class='text-center'><button type='button' class='delete-contact' title='Удалить'>x</button></td>");

        newContact.children().eq(0).text(contactsCount);
        newContact.children().eq(1).text(surname);
        newContact.children().eq(2).text(name);
        newContact.children().eq(3).text(phone);

        var deleteContact = newContact.children().eq(4);
        deleteContact.click(function () {
            contactsCount--;
            newContact.remove();
            updateContactsId();
        });

        $("#phonebook").append(newContact);

        return false;
    });

    function updateContactsId() {
        $("#phonebook tr").each(function (index) {
            $(this).find("td:first").text(index);
        });
    }
});