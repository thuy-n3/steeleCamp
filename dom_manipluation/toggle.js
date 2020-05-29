//click button to toggle background colors

var clickButton = document.querySelector('button');
var isPurple = false; 

// clickButton.addEventListener("click", function(){
//     if(isPurple){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// })

clickButton.addEventListener("click", function(){
    document.body.classList.toggle("purple");
});