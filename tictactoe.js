let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let winMsg = document.querySelector(".win-msg");
let newGameContainer = document.querySelector(".new-game-container");
let newGameBtn = document.querySelector(".new-game")

let winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];

let turn = "playerX";
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn == "playerX"){
        box.innerText = "X";
        turn = "playerO";
        }
        else{
            box.innerText = "O";
            turn = "playerX";
        }
        disableBox(box);
        checkWinner(winPatterns, boxes);
    });
});

let checkWinner = (winPatterns, boxes) => {
    winPatterns.forEach((pattern) => {
        let posi1 = boxes[pattern[0]].innerText;
        let posi2 = boxes[pattern[1]].innerText;
        let posi3 = boxes[pattern[2]].innerText; 
        if(posi1 != "" && posi2 != "" && posi3 != ""){
            if(posi1 == posi2 && posi2 == posi3){
                winMsg.classList.remove("win-msg-hide");
                winMsg.innerText = `Congrats! Winner is ${posi1}`;
                newGameContainer.classList.remove("new-game-hide");
                boxes.forEach((box)=> {
                    box.disabled = true;
                });
            }
        }
    });
}


    newGameBtn.addEventListener("click", () =>{
        winMsg.classList.add("win-msg-hide");
        newGameContainer.classList.add("new-game-hide");
        boxes.forEach((box)=> {
            enableBox(box);
            box.innerText="";
        });
    });

    resetBtn.addEventListener("click", () => {
        boxes.forEach((box)=> {
            enableBox(box);
            box.innerText="";
        });
    });


let disableBox = (box) => {
    box.disabled = true;
};
let enableBox = (box) => {
    box.disabled = false;
    box.enabled = true;
    turn = "playerX";
}
