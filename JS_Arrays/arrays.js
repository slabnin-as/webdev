var numbersArray = [4, -3, 1, 98, 45, 87, 34];

descendingArraySort(numbersArray);
console.log(numbersArray);
console.log(getFirstFiveElements(numbersArray));
console.log(getLastFiveElements(numbersArray));
console.log(sumEvenNumber(numbersArray));

var array2 = [];
fillArray(1, 100, array2);

console.log(array2);
console.log(getSquaredEvenNumber(array2));

function descendingArraySort(array) {
    array.sort(function(a, b) {
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
    var sum = 0;

    array.forEach(function(item) {
        if (item % 2 === 0) {
            sum += item;
        }
    });

    return sum;
}

function fillArray(start, end, array) {
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
}

function getSquaredEvenNumber(array) {
    var result = [];

    array.forEach(function(item) {
        if (item % 2 === 0) {
            result.push(item * item);
        }
    });

    return result;
}