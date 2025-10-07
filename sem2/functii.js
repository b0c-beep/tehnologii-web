function hello(name) {
    console.log(`hello, ${name}`);
}

hello("John");


const greet = function(name) {
    console.log(`hello, ${name}`);
}

greet("John");


const greetArrow = (name) => {
    console.log(`hello, ${name}`);
}

greetArrow("John");


const greetArrowShort = name => console.log(`hello, ${name}`);
greetArrowShort("John");

//console.log(greetArrowShort(process.argv[1]));


const sum = (a, b) => a + b;
console.log(sum(3, 4));
console.log(sum(10, 20));
console.log(sum(-5, 5));

const pow2 = n => n * n;

if(process.argv.length < 3) {
    console.log("Parametrii insuficienti");
}
else
    console.log(pow2(parseInt(process.argv[2])));


