// objects inside array
// very useful in real world application

// const users = [
//     {userId: 1, firstName: 'Yuvi', gender: 'male'},
//      {userId: 2, firstName: 'Rohan', gender: 'male'},
//       {userId: 3, firstName: 'Rohit', gender: 'male'}
// ]
// for(let user of users)
// {
//     console.log(user.firstName);
// }

// nested destructuring
const users = [
    {userId: 1, firstName: 'Yuvi', gender: 'male'},
     {userId: 2, firstName: 'Rohan', gender: 'male'},
      {userId: 3, firstName: 'Rohit', gender: 'male'}
]
// const[user1, user2, user3] = users;
// console.log(user1);

const[{firstName : user1firstname, userId}, ,{gender: user3gender}] = users;
console.log(user1firstname);
console.log(userId)
console.log(user3gender);