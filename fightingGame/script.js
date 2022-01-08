//Defining all our global variables pointing to the different DIVs we need reference to
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var playerStats = document.getElementById('playerStats');
var playerHP = document.getElementById('playerHP');
var pcHP = document.getElementById('pcHP');
var playerMoves = document.getElementById('playerMoves');
var player = document.getElementById('player');
var pc = document.getElementById('pc');


var play1HP = 100;
var pc1HP = 100;
function startfight(){
    bottomRow.innerHTML = "Pick Player ability by clicking the button above.";
    for (var x=0;x<stats.length; x++){
        stats[x].style.visibility = "visible";
    }
    

}

function monsterAttach(){
    var hitChance = Math.round(Math.random()*15);
    if (hitChance >=5 & hitChance <=15 ){
        var dmg = Math.round(Math.random()*15+1,5);
        play1HP -= dmg;
        if (play1HP < 0){
            play1HP = 0;
        }
        bottomRow.innerHTML += "Monster hit with you an attack , doing " +dmg+" damage,You now has "+play1HP+" hp.<br>";
        var playerHPBarwidth = (play1HP/100)*200;
        playerHP.style.width = playerHPBarwidth+"px";
    }else {
        bottomRow.innerHTML += "Monster missed!";
    }

    if (play1HP == 0){
        bottomRow.innerHTML = "Battle Boss Moster has defeated you! Duh duh DUH!!!!!!<br><button onclick='restartGame()'>Play Again?<button>";
        playerMoves.style.visibility = "hidden";
        player.style.visibility = "hidden";

    }
}

function attack(){
    var hitChance = Math.round(Math.random()*10);
    if (hitChance >=3 & hitChance <=10 ){
        var dmg = Math.round(Math.random()*10+1,3);
        pc1HP -= dmg;
        if(pc1HP<0){
            pc1HP = 0;
        }
        bottomRow.innerHTML = "You hit Battle Boss monster with your attack, doing " +dmg+" damage,Monster now has "+pc1HP+" hp.<br>";
        var pcHPBarwidth = (pc1HP/100)*200;
        pcHP.style.width = pcHPBarwidth+"px";

    }else {
        bottomRow.innerHTML = "You missed!<br>";
    }
    if(pc1HP == 0){
        bottomRow.innerHTML = "You have seccesfully defeated Battle Boss Moster!!!<br><button onclick='restartGame()'>Play Again?<button>";
        playerMoves.style.visibility = "hidden";
        pc.style.visibility = "hidden";
    }else{
        monsterAttach()
    }
    }

function specialAttack(){
    var hitChance = Math.round(Math.random()*20);
    if (hitChance >=10 & hitChance <=20 ){
        var dmg = Math.round(Math.random()*20+1,10);
        pc1HP -= dmg;
        if (pc1HP < 0){
            pc1HP = 0;
        }
        bottomRow.innerHTML = "You hit Battle Boss monster with your super attack, doing " +dmg+" damage,Monster now has "+pc1HP+" hp.<br>";
        var pcHPBarwidth = (pc1HP/100)*200;
        pcHP.style.width = pcHPBarwidth+"px";
    }else {
        bottomRow.innerHTML = "You missed!<br>";
    }
    if (pc1HP == 0){
        bottomRow.innerHTML = "You have seccesfully defeated Battle Boss Moster!!!<br><button onclick='restartGame()'>Play Again?<button>";
        playerMoves.style.visibility = "hidden";
        pc.style.visibility = "hidden";

    }else{
        monsterAttach()
    }
    }

   
function restartGame(){
    play1HP = 100;
    pc1HP = 100;
    var playerHPBarwidth = (play1HP/100)*200;
    playerHP.style.width = playerHPBarwidth + "px";
    var pcHPBarwidth = (pc1HP/100)*200;
    pcHP.style.width = pcHPBarwidth + "px";
    playerMoves.style.visibility = "visible";
    startfight();
}


