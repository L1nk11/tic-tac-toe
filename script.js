const reset = document.getElementById('reset-board')
const restart = document.getElementById('reset-game')
const board = document.getElementById('board')
const start = document.getElementById('start')

let currentPlayerTurn = undefined

// output either 1 or 0 | 1 = X | 0 = O
function defineFirstPlayer() {
    return Math.round(Math.random())
}

function startMessage() {
    const background = document.createElement('div')
    const backgroundTop = document.createElement('div')
    const backgroundBottom = document.createElement('div')
    let firstPlayer = defineFirstPlayer()

    // clean the board and set the style
    board.innerHTML = ''
    board.style.gridTemplateColumns = '1fr'
    board.style.gridTemplateRows = '1fr'

    background.classList.add('message')
    backgroundTop.classList.add('top')
    backgroundBottom.classList.add('bottom')

    backgroundTop.textContent = 'the first player is'

    if (firstPlayer == 1) {
        backgroundBottom.textContent = 'X'
    } else {
        backgroundBottom.textContent = 'O'
    }

    background.addEventListener('click', () => {
        // play animation in reverse

        // after animation clean board and generate new board to star game
        
        generateBoard()
    });

    
    background.appendChild(backgroundTop)
    background.appendChild(backgroundBottom)
    
    // append the background card and do a animation as soon as it is appended
    board.appendChild(background)
}

function generateBoard() {
    board.innerHTML = ''

    board.style.gridTemplateColumns = 'repeat(3, 1fr)'
    board.style.gridTemplateRows = 'repeat(3, 1fr)'
    
    // create a for that will create the cells
    // add a event listener in the cell to call a
    // function that will check if any of the programed
    // positions has been matched, if yes the position 
    // matched should win

    
    
}

start.addEventListener('click', () => {
    startMessage()
})

restart.addEventListener('click', () => {
    restartBoard()
})

reset.addEventListener('click', function() {
    
})

function restartBoard() {
    board.innerHTML = ''

    const startDiv = document.createElement('div')
    startDiv.classList.add('start')
    startDiv.textContent = '>Start Game<'
    startDiv.id = 'start'

    startDiv.addEventListener('click', function() {
        startMessage()
    })

    board.appendChild(startDiv)
}