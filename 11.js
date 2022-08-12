// destructuring of array

// const myArray= ["value1","value2","value3","value4"];
// let [myvar1, , myvar2,...mynewArray] = myArray;
// console.log(myvar1);
// console.log(myvar2);
// console.log(mynewArray);


// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects
const person = {name:"harshit", age:22,
"person hobbies": ["guitar","sleeping", "valorant"]};
const key = "email";
console.log(person);

// accessing the object we got two methods 
// bracket and dot notations
// console.log(person["person hobbies"]);
// console.log(person.name);
person[key] = "yuva200324@gmail.com";
console.log(person)