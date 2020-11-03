//Scores
var scores = [0,0];
var roundScore = [0,0];

//Current active player    0 - prvi    1 - drugi

var activePlayer = 0;
var gameState = true;
//Kockica

document.querySelector(".btn-roll").addEventListener("click", function(){
                                                                                   if(gameState){
                                                                            var dice = Math.floor(((Math.random()*6)+1));
                                                                            document.querySelector("img").src="Pictures/dice-"+dice+".png";
                                                                            document.querySelector("img").style.display="block";
                                                                            if (!(dice === 1)){
                                                                                roundScore[activePlayer] += dice;
                                                                                document.querySelector("#player-"+(activePlayer+1)+"-current").textContent=roundScore[activePlayer];
                                                                            }
                                                                            else{
                                                                                document.querySelector("#player-"+(activePlayer+1)+"-current").textContent=0;
                                                                                roundScore[activePlayer] = 0;
                                                                                document.getElementById("dot-player-"+(activePlayer+1)).style.display = "none";
                                                                                document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "rgb(205, 233, 233)";
                                                                                (activePlayer === 0) ? activePlayer++ : activePlayer--;
                                                                                document.getElementById("dot-player-"+(activePlayer+1)).style.display = "inline-block";
                                                                                document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "darkgray";
                                                                            }
                                                                        }
                                                                            });

document.querySelector(".btn-hold").addEventListener("click", function(){
                                                                            if(gameState){
                                                                            if(roundScore[activePlayer]>0){
                                                                                scores[activePlayer] += roundScore[activePlayer];
                                                                            document.getElementById("player-"+(activePlayer+1)+"-overall").textContent=scores[activePlayer];
                                                                            roundScore[activePlayer] = 0;
                                                                            document.querySelector("#player-"+(activePlayer+1)+"-current").textContent=0;
                                                                            }

                                                                            if(scores[activePlayer]>=100){
                                                                                alert("Pobedio je player "+(activePlayer+1));
                                                                                document.querySelector(".player-"+(activePlayer+1)).textContent = "WINNER!";
                                                                            gameState = false;
                                                                            }else{
                                                                                document.getElementById("dot-player-"+(activePlayer+1)).style.display = "none";
                                                                            document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "rgb(205, 233, 233)";
                                                                            (activePlayer === 0) ? activePlayer++ : activePlayer--;
                                                                            document.getElementById("dot-player-"+(activePlayer+1)).style.display = "inline-block";
                                                                            document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "darkgray";
                                                                            }
                                                                        }
                                                                            
                                                                            });
document.querySelector(".btn-new").addEventListener("click",function(){
                                                                             if(gameState){
                                                                            document.getElementById("player-1-overall").textContent=0;
                                                                            document.getElementById("player-2-overall").textContent=0;
                                                                            document.getElementById("player-1-current").textContent=0;
                                                                            document.getElementById("player-1-current").textContent=0;
                                                                            document.querySelector("img").style.display = "none";
                                                                            document.querySelector("#dot-player-2").style.display = "none";
                                                                            document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "rgb(205, 233, 233)";
                                                                            activePlayer = 0;
                                                                            scores = [0,0];
                                                                            roundScore = [0,0];
                                                                            document.getElementById("dot-player-1").style.display = "inline-block";
                                                                            document.querySelector(".main-"+(activePlayer+1)).style.backgroundColor = "darkgray";
                                                                        }
                                                                            })
