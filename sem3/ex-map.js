const numbers = [20, 41, 12, 5, 8, 33, 16, 7, 4, 28];

const filterFunction = (arr, num) => arr.filter(item => item % num === 0);

const reduceFunction = (arr) => arr.reduce((sum, item) => sum + item, 0);

const getSumOfDivisibleNumbers = (arr, num) => {
    return (
        arr.filter(item => item % num === 0)
           .reduce((sum, item) => sum + item, 0)
    );
};

console.log("All numbers: " + numbers);
console.log("Numbers divisible by 4: " + filterFunction(numbers, 4));
console.log("Sum of numbers divisible by 4: " + reduceFunction(filterFunction(numbers, 4)));
console.log("Sum of numbers divisible by 4 (combined): " + getSumOfDivisibleNumbers(numbers, 4));