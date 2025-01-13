let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let restart = document.querySelector("#restart");


let player0 = true;
let count = 0;

const wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



boxes.forEach((box) =>{
    box.addEventListener("click", () => {
       
        
        if(player0){
            box.innerText="X";
            player0 = false;
        }else{
            box.innerText ="O";
            player0 = true;
        }
        box.disabled = true;
        count++;
        
        
        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
          alert("Game has been draw");
          disableBoxes(); 
        } 
    })

});


const checkWinner = () =>{
    for(let pattern of wins){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBoxes();
                console.log("Winner.!");
                if(player0 === true){
                    alert("Player 2 is the winner");
                }else{
                    alert("Player 1 is the winner.!");
                }
            }
        }
    }
};

const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}
const resetgame= () =>{
      player0=true;
      count=0;
      enableBoxes();
};

reset.addEventListener(("click"), resetgame);
restart.addEventListener(("click"), resetgame);