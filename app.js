let heads = 0;
let tails = 0;
const coin = document.querySelector(".coin-container");
const flipBtn = document.getElementById("flip-btn");
const resetBtn = document.getElementById("reset-btn");

flipBtn.addEventListener("click",()=>{
    let i = Math.floor(Math.random()*2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads forwards 3s";
        },100);
        heads++;
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails forwards 3s";
        },100);
        tails++;
    }
    setTimeout(updateStats, 3000);
    disableFlip();
});

function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}

function disableFlip(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener("click", ()=>{
    coin.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});