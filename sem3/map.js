const sides = [10, 9, 5, 12, 4, 3];

console.log(sides); // [10, 9, 5, 12, 4, 3]

const getTotalAreas = (arr) => arr.map((item) => item * item);

console.log(getTotalAreas(sides)); // [100, 81, 25, 144, 16, 9]

const getAreaSum = (arr) => arr.reduce((sum, side) => sum + side * side, 0);

console.log(getAreaSum(getTotalAreas(sides))); // 375