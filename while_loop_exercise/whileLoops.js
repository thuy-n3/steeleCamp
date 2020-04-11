// 1. Print all numbers between -10 and 19
console.log ("Printing all number between -10 and 19");

var number = -10;

while (number <=20){
    console.log(number);
    number++;
}

// 2. Print all even numbers between 10 and 40
console.log ("Printing all even number between 10 and 40");

var eNum = 10; 

while (eNum <=40){
    if(eNum % 2 === 0){
        console.log(eNum);
    }
    eNum++;
}

//shorter version 
// var counter = 10;
// while(counter <=40){
//     console.log(counter);
//     counter+=2;
// }


// 3. Print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333");

var counter = 300; 

while(counter <= 333){
    if(counter % 2 !== 0){
        console.log(counter)
    }
    counter +=1
}

// 4. Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("print all numbers divisible by 5 AND 3 between 5 and 50"); 

var counter = 5; 

while (counter <= 50){
    if(counter % 5===0 && counter % 3===0){
        console.log(counter);
    }
    counter+=1;
}