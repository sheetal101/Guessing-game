let secretNumber = Math.floor(Math.random() * 10);
let n=require("readline-sync")
// console.log(secretNumber);

let chance=5
let c=0
function guessing_game(){
    while (chance>0){
        var guess=n.questionInt("enter a number: ")
        if(guess===secretNumber){
            console.log("You won the game \nit took you",c+1,"chance to guess the number, which was", secretNumber);
            break 
        }else if(guess>secretNumber){
            console.log("Your guessed number is high \n you have ",chance-1,"chances");
        }else if (guess<secretNumber){
            console.log("your guessed number is smaller \n you have ",chance-1,"chances");
        }
        c+=1
        chance=chance-1
    }if(chance===0 && guess!=secretNumber){
        console.log("Oooooooops !!!!!! your loss the game secret number was", secretNumber);
    }
    console.log("game over");
}
guessing_game()
var play_again=n.question("do you want to play again \n enter y/n :")
while (true){
    if(play_again==='y'){
        guessing_game()
    }else{
        break
}
}