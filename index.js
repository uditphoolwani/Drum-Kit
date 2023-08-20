
var buttonElem=document.querySelectorAll(".drum");


function playSound(){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
}

function addAnimation(drumKey){
       var drumPressed=document.querySelector("."+drumKey);
       drumPressed.classList.add("pressed");
       setTimeout(function(){
        drumPressed.classList.remove("pressed");
       },100);
}

function playDrum(eventText){
    switch (eventText){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(eventText);
            break;


    }
}

for(i=0;i<buttonElem.length;i++)
{
    
    buttonElem[i].addEventListener("click",function ()  {
        var tex=this.innerHTML;
        playDrum(tex);
        addAnimation(tex);
    })
}

document.addEventListener("keydown",function(event){
    playDrum(event.key);
    addAnimation(event.key);
})