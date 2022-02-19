var blueCar = document.getElementById("blue-car");
var raceCar = document.querySelector('.raceCar');
var result = document.querySelector(".result");
const score = document.getElementById("score");
var game = document.querySelector(".game");
var counter = 0;

var audio = document.getElementById("audio");

blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130);
    blueCar.style.left = random + "px" ;
     counter++ ;
});

window.addEventListener("keydown", function(e){
   
    if(e.keyCode == "39"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
     if(raceCarLeft < 260){
            raceCar.style.left = (raceCarLeft + 130) + "px" ;
            audio.play();
     }   
    }

    if(e.keyCode == "37"){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
     if(raceCarLeft > 0){
            raceCar.style.left = (raceCarLeft - 130) + "px" ;
            audio.play();
     }   
    }

    if(e.keyCode == "38"){
        var raceCarTop = parseInt(window.getComputedStyle(raceCar).getPropertyValue("top"));
     if(raceCarTop > -250){
            raceCar.style.top = (raceCarTop - 50) + "px" ;
            console.log(Math.value(raceCar.style.top));
            audio.play();
     }   
    }

    if(e.keyCode == "40"){
        var raceCarTop = parseInt(window.getComputedStyle(raceCar).getPropertyValue("top"));
     if(raceCarTop < 520){
            raceCar.style.top = (raceCarTop + 50) + "px" ;
            console.log(Math.value(raceCar.style.top));
            audio.play();
     }   
    } 
  
});

//Game Over
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;
        counter = 0;

    }
},100);