// var todos = ["Buy new turle"];
 
// var input = prompt("What would you like to do?");

// while(input !== "quit"){
//     //handle input
//     if(input === "list"){
//         console.log(todos);
//     } else if (input === "new"){
//         //ask for new todo
//         var newTodo = prompt("Enter new todo");
//         //add to todos array 
//         todos.push(newTodo);
//     }
//     //ask again for new input
//     input = prompt("What would you like to do?");
// }

// console.log("OK, YOU QUit The APP");


//-----------------------------------------------

var todos = ["Buy new turle"];
 
var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle input
    if(input === "list"){
        listTodos();
    } else if (input === "new"){
        addTodo();
    } else if(input === "delete"){
        deleteTodo();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUit The APP");


function listTodos(){
    console.log("**********")
    todos.forEach(function(todos, i){
        console.log(i + ": " + todo);
    })
    console.log("**********")
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("enter new todo");
    //todos.push(newTodo); 
    console.log("Added Todo");
}

function deleteTodo(){
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice()
    todos.splice(index,1);
    console.log("Delete Todo");
}