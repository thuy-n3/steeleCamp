//Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order (don't reverse the array itself)

// printReverse([1,2,3,4]);
// printReverse(["a","b","c"]);

function printReverse(arr){
    for(var i=arr.length-1; i>=0; i--){
        console.log(arr[i])
    }
}

printReverse([1,2,3,4]);
printReverse(["a","b","c"]);


//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical 

//isUniform([1,1,1,1,]);
//isUniform([2,1,1,1]);
//isUniform(["a","b","p"]);
//isUniform(["b","b","b"]);

function isUniform(arr){
    var first = arr[0];
    for(var i=1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

isUniform([1,1,1,1,]);
// isUniform([2,1,1,1]);
// isUniform(["a","b","p"]);
// isUniform(["b","b","b"]);


//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array 

//sumArray([1,2,3]);
//sumArray([10,3,10,4]);
//sumArray([-5,100]);

function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element
    });
    return total;
}


//Write a funtion max() that accepts an array of numbers and return the maximum number in the array 

//max([1,2,3]);
//max([10,3,10,4]);
//max([-5,100])

function max(arr){
    var max = arr[0];
    for(var i=1; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
