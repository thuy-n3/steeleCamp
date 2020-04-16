//1. Write function isEven() which takes a single numeric argument and returns true if the number is event, and false otherwise 
    //isEven(4);
    //isEven(21);
    //isEven(68);
    //isEven(333);

// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
    
// }    
// console.log(isEven());

function isEven(num){
    return num % 2 === 0;
}

    console.log(isEven(4));
    console.log(isEven(21));
    console.log(isEven(68));
    console.log(isEven(333));
  


//2. Write a function factorial() which takes a single numberic argument and returns the factorial of that number
    //factorial(5);
    //factorial(2);
    //factorial(10);
    //factorial(0);


//factorial(4) 4 x 3 x 2 x 1    
function factorial(num){
    var result = 1; 
    for(var i=2; i <= num; i++){
        result *= i;
    }
    return result;
}

//define a result variable 
//calculate factorial and store value in result 
//return the result variable 



//3. Write a function kebabToSnake() which takes a single kabab-cased string argument and returns the snake_caked version
    //kebabToSnake("hello-world");
    //kebabToSnake("dogs-are-awesome");
    //kebabToSnake("blah");

function kebabToSnake(str){
   var newStr = str.replace(/-/g, "_");
   return newStr;
}

//replace all '-' with "_"
//use regular express to replace string 
//return str in with replace new string

