// filter method
const numbers = [1,3,2,6,4,8]
const isOdd = (number)=>
{
    return number % 2 !== 0
}

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers)
