//create array to represent the board/:
connectFour = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],

]
const columnCount = 7
const rowCount = 6

let playerBlack = "B"
let playerRed = "R"
let currentPlayer = playerBlack
let currentColumn = null

//click handler:
let col1 = document.getElementById('1')
// col1.index = 0
let col2 = document.getElementById('2')
// col2.index = 1
let col3 = document.getElementById('3')
// col3.index = 2
let col4 = document.getElementById('4')
// col4.index = 3
let col5 = document.getElementById('5')
// col5.index = 4
let col6 = document.getElementById('6')
// col6.index = 5
let col7 = document.getElementById('7')
// col7.index = 6


// turns: black on even values of turnCounter, and red on odd values of turnCounter
let turnCounter = 0
// columnCounter counts backwards until it reaches the top element
let columnCounter = [5, 5, 5, 5, 5, 5, 5]

const displayDisk = function(child, parent) {
    return parent.appendChild(child)
}
const createDisk = function() {
    let top = document.createElement('div')
    top.classList.add('row')
    if (turnCounter%2==0) { //even
        currentPlayer = playerBlack
        top.classList.add('black')
    } else if (turnCounter%2!=0) { //odd
        currentPlayer = playerRed
        top.classList.add('red')
    }
    return top
}



const winningMoveHorizontal = (board, piece) => {
    for (let col=0; col<=columnCount-3; col++) {
        for (let row=0; row<=rowCount; row++) {
            if (board[r][c] ==piece && board[r][c+1]==piece && board[r][c+2]==piece && board[r][c+3]==piece) {
                return true
            } else {
                return false
            }
        }
    }
}

const winningMoveVertical = (board, piece) => {
    for (let col=0; col<=columnCount; col++) {
        for (let row=0; row<=rowCount-3; row++) {
            if (board[r][c] ==piece && board[r+1][c]==piece && board[r+2][c]==piece && board[r+3][c]==piece) {
                return true
            } else {
                return false
            }
        }
    }
}

const winningMovePosDiagonal = (board, piece) => {
    for (let col=0; col<=columnCount-3; col++) {
        for (let row=0; row<=rowCount-3; row++) {
            if (board[r][c] ==piece && board[r+1][c+1]==piece && board[r+1][c+2]==piece && board[r+3][c+3]==piece) {
                return true
            } else {
                return false
            }
        }
    }
}

const winningMoveNegDiagonal = (board, piece) => {
    for (let col=0; col<=columnCount-3; col++) {
        for (let row=3; row<=rowCount; row++) {
            if (board[r][c] ==piece && board[r-1][c+1]==piece && board[r-2][c+2]==piece && board[r-3][c+3]==piece) {
                return true
            } else {
                return false
            }
        }
    }
}

const winConditions = (board, piece) => {
    console.assert((typeof winningMoveHorizontal(board, piece)==='boolean'), "does not return boolean")
}


const addDiskToColumn = (event) => {
    if (currentColumn == null) {
        console.log(event)
    }
    switch (event.currentTarget) {
        case col1:
            console.log(col1.children[columnCounter[0]])
            currentColumn = 0
            displayDisk(createDisk(), col1.children[columnCounter[0]])
            connectFour[columnCounter[0]][0] = currentPlayer
            columnCounter[currentColumn]--

            // turnCounter++
            break;
        case col2:
            console.log(col2.children[columnCounter[1]])
            currentColumn = 1
            displayDisk(createDisk(), col2.children[columnCounter[1]])
            connectFour[columnCounter[1]][1] = currentPlayer
            columnCounter[currentColumn]--
            // turnCounter++
            break;
        case col3:
            console.log(col3.children[columnCounter[2]])
            currentColumn = 2
            displayDisk(createDisk(), col3.children[columnCounter[2]])
            connectFour[columnCounter[2]][2] = currentPlayer
            winConditions(connectFour, currentPlayer)
            columnCounter[currentColumn]--
            // turnCounter++
            break;
        case col4:
            console.log(col4.children[columnCounter[3]])
            currentColumn = 3
            displayDisk(createDisk(), col4.children[columnCounter[3]])
            connectFour[columnCounter[3]][3] = currentPlayer
            winConditions(connectFour, currentPlayer)
            columnCounter[3]--
            break;
        case col5:
            console.log(col5.children[columnCounter[4]])
            currentColumn = 4
            displayDisk(createDisk(), col5.children[columnCounter[4]])
            connectFour[columnCounter[4]][4] = currentPlayer
            winConditions(connectFour, currentPlayer)
            columnCounter[4]--
            break;
        case col6:
            console.log(col6.children[columnCounter[5]])
            displayDisk(createDisk(), col6.children[columnCounter[5]])
            connectFour[columnCounter[5]][5] = currentPlayer
            winConditions(connectFour, currentPlayer)
            columnCounter[5]--
            break;
        case col7:
            console.log(col7.children[columnCounter[6]])
            displayDisk(createDisk(), col7.children[columnCounter[6]])
            connectFour[columnCounter[6]][6] = currentPlayer
            winConditions(connectFour, currentPlayer)
            columnCounter[6]--
            break;
    }
    turnCounter++
    console.log(turnCounter)
}

col1.addEventListener('click', addDiskToColumn)
col2.addEventListener('click', addDiskToColumn)
col3.addEventListener('click', addDiskToColumn)
col4.addEventListener('click', addDiskToColumn)
col5.addEventListener('click', addDiskToColumn)
col6.addEventListener('click', addDiskToColumn)
col7.addEventListener('click', addDiskToColumn)

