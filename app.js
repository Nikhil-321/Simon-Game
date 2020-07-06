var buttonColors = ["green" , "red" , "yellow" , "blue"];

var sequence = [];

var pattern = [];

var started = false;


var level = 0;



$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level-" + level);
        nextSequence();
        started = true;
    }
});

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id"); 
    pattern.push(userChosenColor);
    playSound(userChosenColor);
    animation(userChosenColor);
    checkAnswer(pattern.length-1);
});

function checkAnswer(currentLevel){
    if(sequence[currentLevel] === pattern[currentLevel]){
           
        if(sequence.length === pattern.length){
            
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    
    else{
        
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press any key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        
        startOver();
        
      
             

}
 
    
    
}

function nextSequence(){
    
    pattern = [];
    level++;
$("#level-title").text("Level-" + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = buttonColors[randomNumber];
    sequence.push(randomColor);
    playSound(randomColor);
    animation(randomColor);
    
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}

function animation(currentColor){
    $("#" + currentColor).addClass("pressed");
    
    setTimeout(function(){
        $(".btn").removeClass("pressed")
    },150);
    
}

function startOver(){
    level = 0;
    pattern = [];
 sequence = [];
     started = false;
}





    
    





     


  
    
    


  






    