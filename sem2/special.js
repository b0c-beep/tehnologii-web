const obj = {
    name: "mere",
    price: 5
}

for(const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


const arr = [1, 2, 3, 4, 5];
for(const val of arr) {
    console.log(val);
}