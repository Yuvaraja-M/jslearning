// find method


// const myArray = ["hello", "cat", "dog", "lion"];

// function isLength3(string)
// {
//     return string.length === 3;
// }

// // const result = isLength3("Dog")
// // console.log(result)


// const ans = myArray.find(isLength3);
// console.log(ans)

// if it gets the first string which is equal to 3 it will stop


const users = [
    {userId:1 , userName: "harshit"},
    {userId:2 , userName: "Yuvi"},
    {userId:3 , userName: "raju"},
    {userId:4 , userName: "Baki"}
]

// const findd = users.find((user)=>{
//     return user.userId === 4
// })

const findd = users.find((user)=>user.userId === 3)
console.log(findd)


// every method
// const number = [2,4,6,8,9,10];

// const iseven = number.every((each)=>each % 2 === 0);
// console.log(iseven)


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
    {productId: 4, productName: "macbook", price: 115000},
]

// check every product price is less than 30,000

// const tocheck = userCart.every((product)=>product.price < 300000)
// console.log(tocheck)


// how functions can be made

// function tocheck(product){
//     product.price < 300000

// }

// console.log(userCart.every(tocheck));
// error aa rha hai ; (

// const tocheck = userCart.every((product) =>{
//     return product.price < 30000;
// })
// console.log(tocheck)

// some method

// const demo = [3,5,2,9];
// // ek vhi number even ho tho true return karega
// // then true
// const evenhai= demo.some((hehe)=>hehe % 2 === 0);
// console.log(evenhai);
const mac = userCart.some((hehe)=>
{   
    return hehe.price > 100000})
console.log(mac);


