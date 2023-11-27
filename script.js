let timer = 10;
let score = 0;
let hitRn = 0;

function incScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble(){
    let clutter = "";

for(i=1; i<=161; i++){
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function newHitVal(){
    
     hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitRn;
}
function runTimer(){
   let timerInt = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent = timer
        }
        else{
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1>Gamer Over!</h1>`;
           

        
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
   let clickedNum = Number(dets.target.textContent);
   if(clickedNum === hitRn){
    incScore();
    makeBubble();
    newHitVal();
   }

})
makeBubble();
newHitVal();
runTimer();
