var score = 0;
var htr = 0
function iscore(){
    score +=  10;
    document.querySelector("#scoreval").textContent = score;
}

function getNetHit(){
     htr= Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = htr;
}

function make(){
    var clutter = ""

for(var i =1 ; i<=100; i++){
     var r= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${r}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
var Timer = 60;
function runTimer (){
     var Timero=setInterval(function(){
       if(Timer>0){
        Timer--;
       document.querySelector("#timerval").textContent = Timer;
       }
       else{
        clearInterval(Timero);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
       }
    } ,1000);
}

document.querySelector("#pbtm");
addEventListener("click",function(dets){
    var clicked = (Number(dets.target.textContent));
    if(clicked==htr);
    iscore();
    make();
    getNetHit();
})

runTimer();
make();
getNetHit();
iscore();  