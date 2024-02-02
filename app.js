let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector("#new-btn");

let newbtn = document.querySelector("#new-btn");
let winmsg = document.querySelector("#win-msg");

let msg = document.querySelector(".msg")

const showinner = (winner) =>{
    winmsg.innerText = `The Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
}

let turn0 = true;

let winevent = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    turn0 = true;
    endableboxes();
    msg.classList.add ("hide");
}

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const endableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("button was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X"; 
            turn0 = true; 
        }
        box.disabled = true;
        checkwinner();
    } )
})

const checkwinner = () =>{
    for(let pattern of winevent){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!= "" && pos3 != ""){
            if(pos1==pos2 && pos2 == pos3){
                console.log("winner" , pos1);
                showinner(pos1);
            }
        }
        
    }
};

newgame.addEventListener("click" , resetgame);

resetbtn.addEventListener("click" , resetgame);


