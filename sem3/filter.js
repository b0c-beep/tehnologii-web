arr = [1, 2, 3, 4, 5];

const result = arr.filter((num) => num > 2); 

console.log(arr); // [1, 2, 3, 4, 5]
console.log(result); // [3, 4, 5]

const animalList = ["cat", "dog", "elephant", "ant", "lion"];

const filterFunction = (list, forbiddenWord, minWordLength) => {
    return list.filter(
        (word) => word.length >= minWordLength && word !== forbiddenWord
    );
};

console.log(animalList); // ["cat", "dog", "elephant", "ant", "lion"]
const filteredAnimals = filterFunction(animalList, "ant", 4);
console.log(filteredAnimals); // ["elephant", "lion"]

const filterFunctionSimplified = (list, forbiddenWord, minWordLength) => list.filter((word) => word.length >= minWordLength && word !== forbiddenWord);

const filteredAnimalsSimplified = filterFunctionSimplified(animalList, "ant", 4);
console.log(filteredAnimalsSimplified); // ["elephant", "lion"]

