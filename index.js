var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber1 +".png";
var randomImageSrc="./images/"+randomImage;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSrc);




var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2 +".png";
var randomImageSrc2="./images/"+randomImage2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 win!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}



