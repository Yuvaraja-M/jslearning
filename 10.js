// let number  = 0;
// while(number <= 9)
// {
//     console.log(number);
//     number++;
// }
// console.log(`The current value of the number is ${number}`);
// console.log(`hello world`);

let num = 10;
let sum = 0
while(num > 0){
    sum = sum + num;
    num--;
}
// console.log(`The sum of the number is ${sum}`);

// sum of n number is maths
// (n*(n+1))/2

// for (let i = 0; i < 9; i++) {
//     console.log(i);
// }

// let in for loop dont exist outside but var does in the for loop

// let fruits = ["apple", "mango", "grapes"]
// let obj = {};
// console.log(fruits[0]);

// to find whether array we cant use typeof coz it will retusrn object

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// push
// fruits.push("banana");
// console.log(fruits.pop());
// fruits.unshift("banana");
// fruits.unshift("guava");
// fruits.shift();


//push pop fast as compared to shift and unshift 
// push and pop is for last 
// shift and unshift is to add element from front
// console.log(fruits); 


// integer is primitive

// array is refrencial
// if we change in one array it will get reflected in the second array also

// let array1 = ["item1","item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);

// console.log(array2);


// for loop in string array
// let fruits = ["apple", "mango", "grapes", "banana"];
// for(let i=0; i <fruits.length; i++)
// {
//     console.log(fruits[i].toUpperCase());
// }

// use const for creating array
// const fruits = ["apple", "mango"];
// fruits.push("banana");
// console.log(fruits);

// for of loop in array  used for most
// const friots = ["apple", "mango", "grapes"];
// for(let fruit of friots)
// {
//     console.log(fruit);
// }

// for in loop
const fruits1 = ["apple","mango","grapes","bananna"];
const fruits2 = [];
for(index in fruits1){
    fruits2.push(fruits1[index].toUpperCase());
}
console.log(fruits2);