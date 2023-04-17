let playerText = document.getElementById('PlayerText')
let restarBtn = document.getElementById('RestartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
let winningIndicateur = getComputedStyle(document.body).getPropertyValue('--winning')
const O_TEXT = "O"
const X_TEXT = "X";
let currentPlayer = X_TEXT ;
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click' , boxClicked))
   
       
}
function boxClicked(e){
    const id = e.target.id
     if (!spaces[id]){
        spaces[id] = currentPlayer 
        e.target.innerText = currentPlayer 
        if(palyerWon() !==false){
            playerText = `$(currentPlayer) has won!`
            let win = palyerWon()
            win.map( box => boxes[box].style.backgroundColor = winningIndicateur )
        }
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    
    
    } 
}
const winningCom = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function palyerWon(){
for (const condition of winningCom) {
  let [a,b,c] = condition  
  if(spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]){
    return [a,b,c]
  }
}
return false
}
RestartBtn.addEventListener('click' , restart)
function restart(){
    spaces.fill(null)
    boxes.forEach(box => {box.innerHTML=''
    box.style.backgroundColor=''
})
    
    currentPlayer = X_TEXT

}
startGame()



