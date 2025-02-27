const reset = document.getElementById('reset-board')
const restart = document.getElementById('reset-game')
const board = document.getElementById('board')
const start = document.getElementById('start')

let currentPlayerTurn = undefined

let boardList = []

function createPlayer(symbol) {
    let score = 0

    const increaseScore = () => score += 1
    const resetScore = () => score = 0

    return {symbol, increaseScore, resetScore}
}

function startMessage() {
    const background = document.createElement('div')
    const backgroundTop = document.createElement('div')
    const backgroundBottom = document.createElement('div')

    // output either 1 or 0 | 1 = X | 0 = O
    let firstPlayer = Math.round(Math.random())

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
        currentPlayerTurn = player1
    } else {
        backgroundBottom.textContent = 'O'
        currentPlayerTurn = player2
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

    for (let index = 0; index < 9; index++) {

        const cell = document.createElement('div')
        cell.classList.add('cell')

        let isCellMarked = false

        cell.addEventListener('click', function(){
            // see who turn it is, place the simbol in the div
            // see if there is a winner, if yes stop game 
            // and declare it, if not change turn and continue


            if (currentPlayerTurn == player1 && isCellMarked == false) {
                console.log('player1 turn')
                cell.textContent = player1.symbol
                isCellMarked = true
                currentPlayerTurn = player2
            } else if (currentPlayerTurn == player2 && isCellMarked == false) {
                console.log('player2 turn')
                cell.textContent = player2.symbol
                isCellMarked = true
                currentPlayerTurn = player1
            }

        })

        board.appendChild(cell)
    }
}

start.addEventListener('click', () => {
    startMessage()
})

restart.addEventListener('click', () => {
    restartBoard()
})

reset.addEventListener('click', function() {
    
})

function populateList() {
    
}

function restartBoard() {
    board.innerHTML = ''
    board.style.gridTemplateColumns = '1fr'
    board.style.gridTemplateRows = '1fr'

    const startDiv = document.createElement('div')
    startDiv.classList.add('start')
    startDiv.textContent = '>Start Game<'
    startDiv.id = 'start'

    player1.resetScore()
    player2.resetScore()

    startDiv.addEventListener('click', function() {

        startMessage()
    })

    board.appendChild(startDiv)
}

const player1 = createPlayer('X')
const player2 = createPlayer('O')