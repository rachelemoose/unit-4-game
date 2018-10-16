//generate a random number to guess between 1 and 100 and display it in the "random_number" div
var randomnumber = document.getElementById("random_number")
randomnumber.innerHTML = Math.floor((Math.random()*120) + 19); //this generates a random number that is between 19 and 120

//making each crystal worth a random number between 1 and 12
var crystal1 = Math.floor((Math.random()*12) + 1);
console.log(crystal1)
var crystal2 = Math.floor((Math.random()*12) + 1);
console.log(crystal2)
var crystal3 = Math.floor((Math.random()*12) + 1);
console.log(crystal3)
var crystal4 = Math.floor((Math.random()*12) + 1);
console.log(crystal4)

//establish the score as a variable, game starts at score 0
var totalscore = 0;

//when the crystal is clicked, we write or add the value of the crystal into the "total_score" div
$(".crystal1").click(function(){
    totalscore = totalscore + crystal1;
    $(".total_score").text(totalscore);
}); 

$(".crystal2").click(function(){
    totalscore = totalscore + crystal2;
    $(".total_score").text(totalscore);
}); 

$(".crystal3").click(function(){
    totalscore = totalscore + crystal3;
    $(".total_score").text(totalscore);
}); 

$(".crystal4").click(function(){
    totalscore = totalscore + crystal4;
    $(".total_score").text(totalscore);
}); 