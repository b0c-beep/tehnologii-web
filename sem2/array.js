function addToArray(...args)
{
    let arr = [];
    for(let i=0; i<args.length; i++)
    {
        arr.push(args[i]);
    }
    return arr;
}


console.log(addToArray(1,2,3));
console.log(addToArray("a","b","c"));
console.log(addToArray(1,"a",true,null,undefined,{name:"John"},[1,2,3]));
console.log(addToArray());


function sum(a, b, c)
{
    return a + b + c;
}

const arr = [1, 2, 3, 7];

console.log(sum(...arr)); // 6