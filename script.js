const reset = document.getElementById('reset-board')
const restart = document.getElementById('reset-game')
const board = document.getElementById('board')

let currentPlayerTurn = undefined

// functions

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

        // after animation clean board aand generate new board to star game
        board.innerHTML
        generateBoard()
    });

    background.appendChild(backgroundBottom)
    background.appendChild(backgroundTop)
    
    // append the background card and do a animation as soon as it is appended
    // board.appendChild(background)
}

function generateBoard() {
    
}

