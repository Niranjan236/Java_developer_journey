var timer=20;
var score=0;
var hitrn;

function increaseScore() {
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewhit() {
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").innerHTML = hitrn;
}

function make_bubble() {
    var clutter="";
    for (let i = 1; i < 151; i++) {
        var rand=Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rand}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;  
}


function runTimer() {
    var interval=setInterval(function () {
        timer--;
        document.querySelector("#time_val").innerHTML = timer;
        if (timer==0) {
            clearInterval(interval);
            document.querySelector("#time_status").innerHTML = "Time's up!";
            document.querySelector("#pbtm").innerHTML=`<h1> Abbe Chutiye Game over! Tera score hae:${score}!! Noob saale/saali</h1>`
        }
    }, 1000);  
}

function gameMechanism() {
    document.querySelector("#pbtm").addEventListener("click", function (details) {
         var bubnum= Number(details.target.textContent); 
         if (bubnum==hitrn) {
            increaseScore();
            getnewhit();
            make_bubble();
         } 
         console.log(bubnum);      
    })
    
}
gameMechanism();


make_bubble();
runTimer();
getnewhit();


