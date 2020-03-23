"use strict";

(function () {
    var countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 12615882
                },
                {
                    name: "Novosibirsk",
                    population: 1618039
                },
                {
                    name: "Omsk",
                    population: 1164815
                },
                {
                    name: "Tomsk",
                    population: 575352
                }
            ]
        },
        {
            name: "Spain",
            cities: [
                {
                    name: "Madrid",
                    population: 3265038
                },
                {
                    name: "Barcelona",
                    population: 1615448
                },
                {
                    name: "Malaga",
                    population: 568030
                }
            ]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "New-York",
                    population: 8398748
                },
                {
                    name: "Miami",
                    population: 470914
                },
                {
                    name: "San Francisco",
                    population: 883305
                },
                {
                    name: "Dallas",
                    population: 1345047
                }
            ]
        }
    ];

    function getMaxCitiesCountries(countriesList) {
        var citiesMaximum = Math.max.apply(null, countriesList.map(function (country) {
            return country.cities.length;
        }));

        return countriesList
            .filter(function (country) {
                return country.cities.length === citiesMaximum;
            });
    }

    function getCountriesPopulation(countriesList) {
        var countriesPopulation = {};

        countriesList.forEach(function (country) {
            var name = country.name;
            countriesPopulation[name] = country.cities.reduce(function (sum, city) {
                return sum + city.population;
            }, 0);
        });

        return countriesPopulation;
    }

    console.table(getMaxCitiesCountries(countries));
    console.table(getCountriesPopulation(countries));
})();