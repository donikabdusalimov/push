// task 1
function findLongestName(names) {
    let longestName = "";
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longestName.length) {
            longestName = names[i];
        }
    }
    return longestName;
}

let names = ['alex', 'george', 'michael'];
console.log(findLongestName(names));




// task 2
function min() {
    let minValue = Infinity;
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        if (Array.isArray(arg)) {
            let minInArray = Math.min(...arg);
            if (minInArray < minValue) {
                minValue = minInArray;
            }
        } else if (typeof arg === 'object' && arg !== null) {
            let values = Object.values(arg);
            let minInObject = Math.min(...values);
            if (minInObject < minValue) {
                minValue = minInObject;
            }
        } else if (typeof arg === 'number' && arg < minValue) {
            minValue = arg;
        }
    }
    return minValue;
}
console.log(min(1, 2)); // 1
console.log(min([1, 2])); // 1
console.log(min({ a: 1, b: 2 })); // 1
console.log(min({ a: 1, b: 2 }, { a: 11, b: 12 }))




// task 3
let numbers = [4, 1, 7, 3, 9, 2, 5, 8, 6, 10];
let i = 0;
while (i < numbers.length - 1) {
    let k = 0;
    while (k < numbers.length - i - 1) {
        if (numbers[k] > numbers[k + 1]) {
            let temp = numbers[k];
            numbers[k] = numbers[k + 1];
            numbers[k + 1] = temp;
        }
        k++;
    }
    i++;
}
console.log(numbers);
