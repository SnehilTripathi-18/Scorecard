let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let home = 0
let guest = 0
homeScore.textContent = home
guestScore.textContent = guest

function homeadd1(){
    home += 1
    homeScore.textContent = home
}
function homeadd2(){
    home += 2
    homeScore.textContent = home
}
function homeadd3(){
    home += 3
    homeScore.textContent = home
}

function guestadd1(){
    guest += 1
    guestScore.textContent = guest
}
function guestadd2(){
    guest += 2
    guestScore.textContent = guest
}
function guestadd3(){
    guest += 3
    guestScore.textContent = guest
}

function newGame(){
    guest = 0
    home = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}