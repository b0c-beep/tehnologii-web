const obj = {
    name: "mere",
    price: 5
}

for(const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}