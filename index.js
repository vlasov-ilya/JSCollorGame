const board = document.getElementById('board')
const colors = ['#54365b', '#2a63a0', '#0fcced', '#5f6c0f', '#cb7097', '#0580fe', '#d94eb4', '#86671e', '#45edfd', '#1c877a']
const SQUARES_NUMBER = 500

for(let i = 0; i< SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=>setColor(square))
    square.addEventListener('mouseleave', ()=>removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`

}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}