// sort
// foreach aur map aur filter, reduce new array or array ko change nahi karta
// but sort will change the entire array

// sort string lee kar short karega that wut is the problem
// (6) [1, 2, 3, 302, 5, 7]
const numbers = [2,3,5,7,1,302];
numbers.sort((a,b)=>
{
    return a-b;
});
console.log(numbers)

// what it does is "
// a-b ---> 790
// a-b ---> positive ------> b,a
// 410, 1200 

// a-b -----> negative --->a,b
// 5,9 ----> -4

// agar return mae b- a kare tho high to low mae arrange ho jayega
const products =[
    {productId: 1, productName:"p1", price:300},
    {productId: 2, productName:"p2", price:3000},
    {productId: 3, productName:"p3", price:200},
    {productId: 4, productName:"p4", price:8000},
    {productId: 5, productName:"p5", price:500},
]


// low to high

const lowTohigh =  products.slice(0).sort((a,b) =>{
    return a.price - b.price;
});

const highTolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price
})

// we will use slice to clone a new array
// so that we shall not lost that original previous array

console.log(lowTohigh);

console.log(highTolow)