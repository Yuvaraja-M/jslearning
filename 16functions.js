
// function singHappyBirthday(){
//     console.log("Happy Birthday to u ......")
// }

// singHappyBirthday();

// function twoplusfour(number1, number2)
// {
//     return number1+number2;
// }
// const returned = twoplusfour(2,4);
// console.log(returned);



// this is function expression  = ek variable mai function assign kar dia
const singHappyBirthday = function(){
    console.log("happy birthday to you.....")
}

// singHappyBirthday();

// const sumofthree = function(n1,n2,n3)
// {
//     return n1+n2+n3;
// }
// console.log(sumofthree(2,3,4))

// od or even
// input : 1 number
// output : true or false

// function isEven(number)
// {
//     if (number % 2 == 0) {
//         return true;
//     }
//     else return false;
// }

// const iseven = function(numb)
// {
//     if(numb % 2 === 0)
//     {
//         return true;
//     }
//     return -1;
// }
// console.log(iseven(4));


// console.log(isEven(5))

// input:string
// output : firstCharacter

// const firstchar = function(anystring){
//     return `${anystring}`[0]
// }
// console.log(firstchar(123))

// function 
// input: array, target (number)
// output :index of target present in array
const find = function(arr, flag)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === flag)
        {
            return i;
        }
        
    }
    return -1
}

const ans = find([1,2,3,4,5],3);
console.log(ans);



