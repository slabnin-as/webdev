(function () {
    var numbersArray = [4, -3, 1, 98, 45, 87, 34];

    function sortDescendingArray(array) {
        array.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getLastFiveElements(array) {
        return array.slice(-5);
    }

    function getEvenNumbersSum(array) {
        return array.reduce(function (sum, item) {
            return sum + (item % 2 === 0 ? item : 0);
        }, 0);
    }

    sortDescendingArray(numbersArray);
    console.log(numbersArray);
    console.log(getFirstFiveElements(numbersArray));
    console.log(getLastFiveElements(numbersArray));
    console.log(getEvenNumbersSum(numbersArray));

    function fillArray(start, end) {
    var array = [];

        for (var i = start; i <= end; i++) {
            array.push(i);
        }

    return array;
    }

    function getSquaredEvenNumbersList(array) {
        return array
            .filter(function (number) {return number % 2 === 0;})
            .map(function (number) {return number * number;});
    }

    var array2 = fillArray(1, 100);

    console.log(array2);
    console.log(getSquaredEvenNumbersList(array2));
})();