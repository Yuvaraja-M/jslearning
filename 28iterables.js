// iterables


// const firstName = "Harshit"
// for(let char of firstName){
//     console.log(char)
// }

// const items = ["item1", "item2", "item3"]
// for(let item of items){
//     console.log(item)
// }


// objects are not iterable
// string and array are only iterable
// const users = {'key1': 'value1', 'key2' : 'value2'}
// for(let key of users){
//     console.log(key)
// }


// array like object
// which has length property and we can access it using index number
// example - string

// const firstNmae = "harshit";
// console.log(firstNmae.length);
// console.log(firstNmae[2])


// Sets


const numbers = new Set();
const items = ["item1", "item2", "item3"]
// it is iterable
// store data, not index based, order is not guarented, unique items only
// set mai duplicates not allowed


numbers.add(1);
numbers.add(2);
numbers.add(['item1', 'item2'])
numbers.add(['item1', 'item2'])

// same array can be added coz it is stored as new different array having different adderess
console.log(numbers.has(1))
// if(numbers.has)
console.log(numbers)


// console.log(numbers[2])   undefined

