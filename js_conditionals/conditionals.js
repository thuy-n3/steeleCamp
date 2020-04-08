var age = prompt("how old are you?"); 

// if (age === -1){
//  console.error( age + "is in error!");
// }
// if (age === 21){
//      console.log("happy 21st birthday!!");
// }
// if (age === )


if (age < 0){
    console.log("you're too young!!");
}

if (age === 21){
    console.log("Happy 21st Birthday!!");
}

//age is odd - not divisible by 2
if(age % 2 !== 0){
    console.log("your age is odd");
}

//age is a perfect square
if(age % Math.sqrt(age) === 0){
    console.log("Your age is a perfect square!!");
}