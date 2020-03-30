"use strict";

(function () {
    var people = [
        {
            name: "Andrey",
            lastName: "Ivanov",
            age: 35
        },
        {
            name: "Sergey",
            lastName: "Petrov",
            age: 28
        },
        {
            name: "Ivan",
            lastName: "Seleznev",
            age: 30
        },
        {
            name: "Alex",
            lastName: "Smith",
            age: 20
        },
        {
            name: "George",
            lastName: "Bush",
            age: 68
        },
        {
            name: "Natali",
            lastName: "Portman",
            age: 18
        },
        {
            name: "Max",
            lastName: "Star",
            age: 27
        },
        {
            name: "Vladimir",
            lastName: "Putin",
            age: 30
        },
        {
            name: "Oleg",
            lastName: "Tinkoff",
            age: 24
        },
        {
            name: "Petr",
            lastName: "Chapaev",
            age: 27
        }
    ];
    console.table(people);

    var averageAge = _.reduce(people, function (sum, person) {
        return sum + person.age;
    }, 0) / people.length;

    console.log(averageAge);

    var names = _.chain(people)
        .filter(function (person) {
            return person.age >= 20 && person.age <=30;
        })
        .sortBy("age")
        .value();

    console.table(names);

    _.each(people, function (person) {
        person.fullName = person.lastName + " " + person.name;
    });

    console.table(people);
})();