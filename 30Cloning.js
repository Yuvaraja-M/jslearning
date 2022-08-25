// clone using Object .assign

// memory
const obj = {
    key1: "value1",
    key2: "Value2"
}


// const obj2 = {...obj};
// const obj2 = Object.assign({}, obj)   both are same just it is old code used for cloning
obj.key3 = "value3"

console.log(obj)
console.log(obj2)