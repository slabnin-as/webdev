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

    function getSumEvenNumbers(array) {
        return array.reduce(function (sum, item) {
            return sum + (item % 2 === 0 ? item : 0);
        }, 0);
    }

    sortDescendingArray(numbersArray);
    console.log(numbersArray);
    console.log(getFirstFiveElements(numbersArray));
    console.log(getLastFiveElements(numbersArray));
    console.log(getSumEvenNumbers(numbersArray));

    function fillArray(start, end, array) {
        for (var i = start; i <= end; i++) {
            array.push(i);
        }
    }

    function getSquaredEvenNumbersList(array) {
        return array
        .filter(number => number % 2 === 0)
        .map(number => number * number);
    }

    var array2 = [];
    fillArray(1, 100, array2);

    console.log(array2);
    console.log(getSquaredEvenNumbersList(array2));
})();