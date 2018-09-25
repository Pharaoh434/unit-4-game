
var random_result;
var lost = 0;
var won = 0;
var previous = 0;

var resetAndStart=function (){
    $('.crystals').empty();
   
    var images = [  
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ5eZ5ehPK6cCN0qV_TgORQCNH-0RiNOUU5vY8CfYlozgwfSM",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07Z0iD5rieK6mepbyphf92SnWCpAsQv0YxJPGFGEszrathUKEHA",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuFubOQxjBlTnLL9mfTs-ryqOWaLJjBgpUzK0OXuzvoqMjzMm",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwIHV1yQ2t6AkAChG3bSbDVVC53OUfCh-f50yJCSuCMXkGeom"]
    
    random_result = Math.floor(Math.random() *69 ) + 30;

    $("#result").html('Random Result: '+ random_result);
    
    for( var i= 0; i < 4; i++){
       
        var random= Math.floor(Math.random() * 11) + 1;
            console.log(random);
    
            var crystal = $("<div>");
            crystal.attr({
                "class":'crystal',
                "data-random":random
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            })
        
        $(".crystals").append(crystal);
        
    }
    $("#previous").html("Total Score: "+previous);
}


resetAndStart();

$(document).on('click',".crystal",function(){

    var num = parseInt($(this).attr('data-random'));
    
    $("#previous").html("Total Score: "+ previous);

    previous += num;
    
    //console.log(previous);
    
    if (previous > random_result){
        

        lost++;

        $("#lost").html("You've Lost:"+ lost);
        
        previous=0
 
       resetAndStart();
    }

    else if (previous === random_result){
        
        won++;

        $("#won").html("You've Won:"+ won);
        
          previous=0

        resetAndStart();
    }
   
});
