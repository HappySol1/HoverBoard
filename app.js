const board = document.querySelector('#board')
const SQUEARS_NUMBER = 1000
const colors = ['#B22222','#FF0000','#DC143C','#FFA07A','#E9967A','#FA8072','#F08080','#CD5C5C','#8B0000']

for (let i = 0; i < SQUEARS_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))

    square.addEventListener('mouseleave',()=> removeColor(square))

    board.append(square)
}

function setColor(elem){
    const color = getColor()
    elem.style.backgroundColor = color
    elem.style.border = `1px solid ${color}`
}

function removeColor(elem){
    elem.style.backgroundColor = ' #1d1d1d'
    elem.style.border = `1px solid #000000`
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}