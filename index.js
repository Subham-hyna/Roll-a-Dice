var randomNumber  = Math.floor(Math.random()*6);
var randomArray = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
$("img").attr("src","images/"+randomArray[randomNumber]);

