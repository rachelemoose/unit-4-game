$(document).ready(function () {

//establish the score as a variable, game starts at score 0
    var totalscore = 0;
    totalscore;

//total number of times the player has won - to be updated everytime their score = randomnumber 
    var wins = 0;
    wins;

//total number of times the player has lost - to be updated every time they go above the random number
    var losses = 0;
    losses;

//generate a random number to guess between 19 and 120
    var randomnumber = Math.floor((Math.random()*101) + 19);
    console.log(randomnumber)
//write the random number in the random_number div
    $("#random_number").text(randomnumber) 

//making each crystal worth a random number between 1 and 12
    var crystal1 = Math.floor((Math.random()*12) + 1);
    console.log(crystal1)
    var crystal2 = Math.floor((Math.random()*12) + 1);
    console.log(crystal2)
    var crystal3 = Math.floor((Math.random()*12) + 1);
    console.log(crystal3)
    var crystal4 = Math.floor((Math.random()*12) + 1);
    console.log(crystal4)

//reset function for everytime the player gets a win or loss 
function reset() {
    randomnumber = Math.floor((Math.random()*101) + 19); // new value for randomnumber
    $("#random_number").text(randomnumber); //write new random number on screen
    console.log("reset: " + randomnumber);
    crystal1 = Math.floor((Math.random()*12) + 1); //new value for crystals
    crystal2 = Math.floor((Math.random()*12) + 1); 
    crystal3 = Math.floor((Math.random()*12) + 1); 
    crystal4 = Math.floor((Math.random()*12) + 1);
    totalscore = 0; //reset totalscore to 0
    $(".total_score").text(totalscore); //write new total score
}

//function to check the score - will need to check the score everytime a crystal is clicked, so we know if someone won or not
function checkscore() {
    if (totalscore === randomnumber) {
        wins++;
        console.log(wins);
        alert("You got it to equal " + randomnumber + "! You win!");
        $(".wins").text(wins);
        reset();
    } else if (totalscore > randomnumber) {
        losses++;
        (console.log(losses));
        alert("Uh-oh you went above " + randomnumber + ", you lost!");
        $(".losses").text(losses);
        reset();
    }
}

//when the crystal is clicked, we write or add the value of the crystal into the "total_score" div
    $(".crystal1").on("click", function(){
        totalscore = totalscore + crystal1;
        $(".total_score").text(totalscore);
        console.log("Total after clicking crystal1 = " + totalscore)
        console.log("You are trying to get to " + randomnumber)
        checkscore();
    }); 

    $(".crystal2").on("click", function(){
        totalscore = totalscore + crystal2;
        $(".total_score").text(totalscore);
        checkscore();
    }); 

    $(".crystal3").on("click", function(){
        totalscore = totalscore + crystal3;
        $(".total_score").text(totalscore);
        checkscore();
    }); 

    $(".crystal4").on("click", function(){
        totalscore = totalscore + crystal4;
        $(".total_score").text(totalscore);
        checkscore();
    }); 
      
    }); //end of document function

