//Generate a random number to try to match 
var randomResult;

//Sum of results of crystals on click
var addResults = 0;
var difference = 0;

//Wins and losses counter
var win = 0;
var loss = 0;
//Game reset 
var gameStart = function()  {
        //Empties out old divs created
        $(".crystal").empty();

        //Images
        var images =[
            "https://cdn.cnn.com/cnnnext/dam/assets/130222133420-old-phones-motorola-tac-story-top.jpg",
            "https://static.turbosquid.com/Preview/2015/10/09__13_15_12/Sony_trinitron_KV_02.jpg7b725e94-8a89-459e-8009-ac54f225f851Default.jpg",
            "http://scot-buzz.co.uk/wp-content/uploads/2015/06/15-June-1-John-McG.-400x300.jpg",
            "https://blog.bestbuy.ca/wp-content/uploads/2016/07/Broken-iphone-screen.jpg"
        ]
        //Gernerate a new number between 18-120
        randomResult = Math.floor(Math.random() * 101) + 19;
        //Display random number in html
        $("#results").html("Need to pawn $" + randomResult);
        $("#difference").html("Amount left $" + difference);
        console.log("Total Objective: " + randomResult);
        //Loop to create four divs
        for (var i = 0; i < 4; i++)  {
        
        //Generate a random number between 1-12
        var crystalRandom = Math.floor(Math.random() * 11) + 1;
        console.log("Value: " + crystalRandom);
        
        //Create the new divs
        var crystal = $("<div>");
            
        //Create a class and a data attribute
            crystal.attr({
                
                "class": 'img-responsive col-xs-6 col-s-3',
                "id": 'crystalBox',
                //Attach random number to div
                "data-random": crystalRandom,
        });
            crystal.css({
                'background-image': 'url(' + images[i] + ')',
                'background-size': '150px 150px'
            });
        $(".crystal").append(crystal);
    }
        
        $("#totalResults").html("Trade in value $" + addResults);

}
$(document).ready(function(){
    
gameStart();
difference = 0;
$(document).on('click', "#crystalBox", function()  {
     
    // Turn data attribute into number
    var num = parseInt($(this).attr("data-random"));
    addResults += num;
    console.log("Sum of Values: " + addResults);
    
    //Calculate the difference between random value and sum of clicked values
    //Reset 
    difference = (randomResult - addResults);
    $("#difference").html("Amount left $" + difference);
    $("#totalResults").html("Trade in value $" + addResults);
    //Loss reset
    if(addResults > randomResult)  {
            loss++;
            console.log("You Lose");
            $("#losses").html("Losses: " + loss);
            alert("You Lose!")
            addResults= 0;
            difference= 0;
            gameStart();
    } 
    
    //Wins reset
    else if(addResults === randomResult) {
        win++;
        console.log("You Win");
        $("#wins").html("Wins: " + win);
        alert("You Win!")
        addResults = 0;
        difference = 0;
        gameStart();
    }
});
});
