// fill method
// value, start ,end



// means 10 length hai aur each index mai value eg -1 or 0 etc
// const myArray = new Array(10).fill(-1);



// const myArray = [1,2,3,4,5,6,7,8];

// here myArray.fill(a,b,c)  a->value, b->starting index, c->final index
// myArray.fill(-1,2,5)
// console.log(myArray)


// splice method
// start, delete, insert

const myArray = ['item1', 'item2', 'item3'];

// delete
// first index sae start karna hai aur ek value delete karna hai
// splice(a,b)   a->index , b ->how much items to delete from the index
// myArray.splice(0,2)

// console.log(myArray)


// insert

// 0 aur 1 ke bhech item insert ho gya
// myArray.splice(1,0,'inserted item');
// const deleteItem = myArray.splice(1,2,"")

// insert and delete
const deletedItem = myArray.splice(1,2,"inserted item1","inserted item2")

console.log(deletedItem)
console.log(myArray)



