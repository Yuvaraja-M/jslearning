// important array methods

const number = [4, 2, 5, 8]
// function multi(number, index)
// {
//     // console.log("index is: ", index);
//     // console.log(number *2);
//     // console.log(`${number}*2 = ${number * 2}`)
//     console.log(`Index is ${index} , The number is ${number}`)
// }

// for (let i = 0; i < number.length; i++) {
//     multi(number[i],i)
// }


// number.forEach(multi)  // very easy



// number.forEach(function (number, index) {
//     console.log(`Index is ${index} , The number is ${number}`)

// })


// number.forEach(function (number, index){
//     console.log(`Index is ${index}, And ${number} * 2 = ${number * 2}`)
// })


// const users = [
//     {firstName : "harshit", age:21},
//     {firstName: "Yuvi", age:22},
//     {firstName: "mama" , age :33}
    
// ]
// users.forEach((user, index) =>{
//     console.log(user.firstName, index)
// })

// map method 
const numbers = [3,4,5,6,1];

// const square = function(number){
//     return number * number;
// }
// console.log(numbers.map(square))
// const squareNumber = numbers.map((numbers, index)=>{
//     return `index: ${index}, ${numbers*numbers}`;
// });

// console.log(squareNumber)

const users = [
    {firstName: "harshit",age:23},
    {firstName: "mohit", age:21},

]

// const userNames = users.map((user)=>{
//     return user.firstName +"  "+ user.age;
// })

// console.log(userNames);

const userName = users.map((user)=>{
    return user.firstName+ " " + user.age
})

console.log(userName)