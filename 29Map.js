
// object literals
// key are in string
// key - > symbol
// mapping will be ordered guranted
// object mae no guraenteee

// lhs value string mai hi hogi

// const person = {
//     firstName : 'harshit',
//     age:18,
//     1 : "oone"
// }

// for(let obj in person)
// {
//     console.log(typeof obj)
// }

// console.log(person)


// key value pair
// map mae key any datatype ka rakh sakte hain advantage over object

// const person = new Map();
// person.set('firstname', "harshit")
// person.set('age', 7)
// person.set(1,'one')
// person.set(['dark', 'peaky'], '10');
// console.log(person.get('age'))
// console.log(person.keys())

// for(let e of person.keys())
// {
// console.log(e, typeof e)}

// for(let [k, value ] of person)
// {
//     console.log(k,value)

// }
const person1 = {
    id : 1,
    firstname: 'harshit'
}
const person2 = {
    id : 2,
    firstname: 'harsh'
}

const extraInfo = new Map();
extraInfo.set(person1,{age:8, gender: 'male'})
extraInfo.set(person2,{age:9, gender: 'female'})
// key => value    person1 is mapped to {##}
// console.log(userInfo)
console.log(person1.id);
console.log(extraInfo.get(person1).age)
console.log(extraInfo.get(person2).gender)


// const person = new Map([['firstname', 'harsit'],['age', 16]])
// console.log(person)
