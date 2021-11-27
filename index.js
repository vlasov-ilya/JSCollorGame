const board = document.getElementById('board')
const colors = ['#54365b', '#2a63a0', '#0fcced', '#5f6c0f', '#cb7097', '#0580fe', '#d94eb4', '#86671e', '#45edfd', '#1c877a']
let SQUARES_NUMBER = ''

function start() {
    SQUARES_NUMBER = prompt('Enter any number')
    while(SQUARES_NUMBER ==''){
        SQUARES_NUMBER = prompt('Enter any number')
    }
    setMaxWidth()
    for(let i = 0; i< SQUARES_NUMBER; i++){
        const square = document.createElement('div')
        square.classList.add('square')
    
        square.addEventListener('mouseover', ()=>setColor(square))
        square.addEventListener('mouseleave', ()=>removeColor(square))
    
        board.append(square)
    }
}

window.onload = start()


function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`

}

function setMaxWidth(){
    const container = document.querySelector('.container')
    if(SQUARES_NUMBER <=500){
    container.style.maxWidth = `${SQUARES_NUMBER*1.6}px`
    } else if (SQUARES_NUMBER <=1500) {
        container.style.maxWidth = `${SQUARES_NUMBER*.5}px`
    } else {
        container.style.maxWidth = '400px'
    }
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

