(function () {
    let numbersArray = [4, -3, 1, 98, 45, 87, 34];

    descendingArraySort(numbersArray);
    console.log(numbersArray);
    console.log(getFirstFiveElements(numbersArray));
    console.log(getLastFiveElements(numbersArray));
    console.log(sumEvenNumber(numbersArray));

    let array2 = [];
    fillArray(1, 100, array2);

    console.log(array2);
    console.log(getSquaredEvenNumberList(array2));

    function descendingArraySort(array) {
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

    function sumEvenNumber(array) {
        return array.reduce(function (sum, item) {
            return sum + (item % 2 === 0 ? item : 0);
        });
    }

    function fillArray(start, end, array) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    }

    function getSquaredEvenNumberList(array) {
        let evenNumbers = array.filter(function (number) {
            return number % 2 === 0;
        });

        return evenNumbers.map(function (number) {
            return number * number;
        });
    }
})();