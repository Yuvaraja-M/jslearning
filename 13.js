// computed properties

// const key1 = "objkey1";
// const key2 ="objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";


// const obj = {
//     [key1] : value1,
//     [key2] : value2
// };

// console.log(obj);


// spread operator
// ... spreads the elements in the array
// const array1 = [1,2,3];
// const array2 = [5,6,7];
// const newArray = [...array1, ...array2];
// console.log(newArray);

// const arraya = [..."1234567"];
// console.log(arraya);

const obj1 = {
    key1 : "value1",
    key2: "value2",
    // key1 : "value3"
};

// console.log(obj1);
const obj2 = {
    key1: "valueUnique",
    key3 : "value3",
    key4 : "value4"
};
// const newobj = {...obj1, ...obj2};
// console.log(newobj);

// const newconst =  {..."abc"};
// console.log(newconst);

const obj = {..."abcdefghijklmnop"};
console.log(obj);