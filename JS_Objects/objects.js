var countries = [];

countries[0] = {
    name: "Russia",
    cities: [{
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
}
countries[1] = {
    name: "Spain",
    cities: [{
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
}
countries[2] = {
    name: "USA",
    cities: [{
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

getMaxCitiesCountries(countries);
console.table(getCountryPopulation(countries));

function getMaxCitiesCountries(countriesList) {
    var countriesName = [];
    var maxCitiesInCountry = 0;

    countriesList.forEach(function(country) {
        if (country.cities.length > maxCitiesInCountry) {
            maxCitiesInCountry = country.cities.length;
            countriesName.length = 0;
            countriesName.push(country.name);
        } else if (country.cities.length === maxCitiesInCountry) {
            countriesName.push(country.name);
        }

        console.log(countriesName);
    });

    return countriesName;
}

function getCountryPopulation(countriesList) {
    let countriesPopulationList = [];
    let countryPopulation = {};

    countriesList.forEach(function(country) {
        countryPopulation.name = country.name;
        countryPopulation.population = calcPopulation(country.cities);

        console.log(countryPopulation);

        countriesPopulationList.push(countryPopulation);

        console.log(countriesPopulationList);
    });

    return countriesPopulationList;
}

function calcPopulation(cities) {
    var sum = 0;
    cities.forEach(function(city) {
        sum += city.population;
    });

    return sum;
}