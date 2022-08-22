// const app = ()=>{
//     const myFunc = ()=>{
//         console.log("hello from myFunc")
//     }
//     console.log("Inside app")
//     myFunc()
// }

// app()


// lexical scope

// let and const block scope

// {
//     let firstname = "Yuvi"
//     console.log(firstname)
 
// }


// default parameter

// function addTwo(a,b)
// {
//     if(typeof b === "undefined")
//     {
//         b = 0;
//     }
//     return a + b;
// }

// const ans = addTwo(9);
// console.log(ans)


// rest parameters

// function myFunc(a,b,...c)
// {
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
//     // console.log(`a is ${a}`)
// }

// myFunc(3,4,5,6,7,8,9)


// addAll(1,2,3,4,5,6,7,8,9)

// function add(...b){
//     let sum = 0
//     for(let a of b)
//     {
//         sum = sum + a
//     }
//     return sum
// }
// let ad = add(1,2,3)
// console.log(ad)

// param destructuring

// object 
// react

const person = {
    firstName : "harshit",
    gender :"male",
    age : 50
}

function personDetails({firstName, gender, age})
{
    console.log(firstName)
    console.log(gender)
    console.log(age)
}
personDetails(person)