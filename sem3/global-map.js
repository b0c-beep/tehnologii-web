const sampleArray = [1, 2, 3, 4, 5];
console.log("Sample array: " + sampleArray);

const mapFunction = (sampleArray, transformation) => {
    const result = [];
    for (let i = 0; i < sampleArray.length; i++) {
        result.push(transformation(sampleArray[i]));
    }
    return result;
}

console.log("Mapped array (each element multiplied by 2): " + mapFunction(sampleArray, item => item * 2));