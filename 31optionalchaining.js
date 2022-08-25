// optional chainning

const user = {
    firstName: "Yuvi",
    address:{houseNumber: '123'} 
}

console.log(user?.firstName)
console.log(user?.address?.houseNumber)

// means for values jho nahi hai or to be filled after usme undefined de dega
