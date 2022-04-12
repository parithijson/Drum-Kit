
for (var x = 0;x < document.querySelectorAll(".drum").length;x++){

document.querySelectorAll(".drum")[x].addEventListener("click",function(){
    
    var btn = this.innerHTML;
    makeSound(btn);
    buttonAnime(btn);
})};

document.addEventListener("keypress", function(event){
   var key = event.key;
    makeSound(key);
    buttonAnime(key);
});



function makeSound(key){
    switch (key) {
        case "w":
           var audio = new Audio('sounds/tom-1.mp3');
           audio.play(); 
        break;
        case "a":
           var audio = new Audio('sounds/tom-2.mp3');
           audio.play(); 
        break;
        case "s":
           var audio = new Audio('sounds/tom-3.mp3');
           audio.play(); 
        break;
        case "d":
           var audio = new Audio('sounds/tom-4.mp3');
           audio.play(); 
        break;
        case "j":
           var audio = new Audio('sounds/snare.mp3');
           audio.play(); 
        break;
        case "k":
           var audio = new Audio('sounds/crash.mp3');
           audio.play(); 
        break;
        case "l":
           var audio = new Audio('sounds/kick-bass.mp3');
           audio.play(); 
        break;
    
        default: console.log(btn);
            break;
    }
    
}

function buttonAnime(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}