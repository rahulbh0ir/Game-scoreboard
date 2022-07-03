let count1= 0
let count2= 0
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")


function home1(){
    count1 += 1;
    scoreHome.textContent = count1;
}

function home2(){
    count1 += 2;
    scoreHome.textContent = count1;
}

function home3(){
    count1 += 3;
    scoreHome.textContent = count1;
}

function guest1(){
    count2 += 1;
    scoreGuest.textContent = count2;
}


function guest2(){
    count2 += 2;
    scoreGuest.textContent = count2;
}


function guest3(){
    count2 += 3;
    scoreGuest.textContent = count2;
}

function reset(){
     count1= 0;
     count2= 0;
     scoreHome.textContent = 0;
     scoreGuest.textContent = 0;
}