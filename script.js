const reset = document.getElementById('reset-board')
const restart = document.getElementById('reset-game')
const board = document.getElementById('board')
const start = document.getElementById('start')
const player1Score = document.getElementById('player1')
const player2Score = document.getElementById('player2')

let currentPlayerTurn = undefined
let turns = 0
let boardList = []

function createPlayer(symbol) {
    let score = 0

    const increaseScore = () => score += 1
    const resetScore = () => score = 0
    const showScore = () => String(score)

    return {symbol, increaseScore, resetScore, showScore}
}

function startMessage() {
    const background = document.createElement('div')
    const backgroundTop = document.createElement('div')
    const backgroundBottom = document.createElement('div')

    // output either 1 or 0 | 1 = X | 0 = O
    let firstPlayer = Math.round(Math.random())

    // clean the board and set the style
    boardList = []
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

    for (let index = 0; index < 9; index++) {

        boardList.push(undefined)

        const cell = document.createElement('div')
        cell.classList.add('cell')

        let isCellMarked = false

        cell.addEventListener('click', function(){

            // console.log(index)
            let winner = undefined

            if (currentPlayerTurn == player1 && isCellMarked == false) {
                cell.textContent = player1.symbol
                isCellMarked = true
                currentPlayerTurn = player2

                boardList[index] = player1

                winner = checkWinner(player1)
                if (winner == true) {
                    endGame('win', player1.symbol)
                    player1.increaseScore()
                }

                turns++
                if (turns == 9) {
                    endGame('draw')
                }
            } else if (currentPlayerTurn == player2 && isCellMarked == false) {
                cell.textContent = player2.symbol
                isCellMarked = true
                currentPlayerTurn = player1

                boardList[index] = player2

                winner = checkWinner(player2)
                if (winner == true) {
                    endGame('win', player2.symbol)
                    player2.increaseScore()
                }

                turns++
                if (turns == 9) {
                    endGame('draw')
                }
            }
        })
        board.appendChild(cell)
    }
}

function checkWinner(player) {
    // check rows

    if (boardList[0] === boardList[1] && boardList[1] === boardList[2] && boardList[0] !== undefined) {
        return true
    }
    if (boardList[3] === boardList[4] && boardList[4] === boardList[5] && boardList[3] !== undefined) {
        return true
    }
    if (boardList[6] === boardList[7] && boardList[7] === boardList[8] && boardList[6] !== undefined) {
        return true
    }

    // check columns
    if (boardList[0] === boardList[3] && boardList[3] === boardList[6] && boardList[0] !== undefined) {
        return true
    }
    if (boardList[1] === boardList[4] && boardList[4] === boardList[7] && boardList[1] !== undefined) {
        return true
    }
    if (boardList[2] === boardList[5] && boardList[5] === boardList[8] && boardList[2] !== undefined) {
        return true
    }

    // check diagonals
    if (boardList[0] === boardList[4] && boardList[4] === boardList[8] && boardList[0] !== undefined) {
        return true
    }
    if (boardList[6] === boardList[4] && boardList[4] === boardList[2] && boardList[6] !== undefined) {
        return true
    }

    return false
}

function endGame(result, player) {
    turns = 0
    boardList = []
    
    board.innerHTML = ''
    board.style.gridTemplateColumns = '1fr'
    board.style.gridTemplateRows = '1fr'

    const background = document.createElement('div')
    const backgroundTop = document.createElement('div')
    const backgroundBottom = document.createElement('div')
    background.classList.add('message')
    backgroundTop.classList.add('top')
    backgroundBottom.classList.add('bottom')
    backgroundBottom.style.fontSize = '10rem'

    if (result == 'win') {
        backgroundTop.textContent = 'the winner is'
        backgroundBottom.textContent = player
    }

    if (result == 'draw') {
        backgroundTop.textContent = 'the game has'
        backgroundBottom.textContent = 'draw'
    }

    background.addEventListener('click', () => {
        startMessage()
        player1Score.textContent = player1.symbol + ' = ' + player1.showScore()
        player2Score.textContent = player2.symbol + ' = ' + player2.showScore()
    })

    background.appendChild(backgroundTop)
    background.appendChild(backgroundBottom)
    board.appendChild(background)
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

    player1Score.textContent = player1.symbol + ' = ' + player1.showScore()
    player2Score.textContent = player2.symbol + ' = ' + player2.showScore()

    startDiv.addEventListener('click', function() {
        startMessage()
    })

    board.appendChild(startDiv)
}

start.addEventListener('click', () => {
    startMessage()
})

restart.addEventListener('click', () => {
    restartBoard()
})

reset.addEventListener('click', function() {
    startMessage()
})

const player1 = createPlayer('X')
const player2 = createPlayer('O')

player1Score.textContent = player1.symbol + ' = ' + player1.showScore()
player2Score.textContent = player2.symbol + ' = ' + player2.showScore()