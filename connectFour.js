//Lori Henderson (PM), Michael Byfield, Jordan Haagenson, Cory Schlaudecker

//Breakdown of Steps for project:

    //--  Make div columns and rows (done)
    //--  Create array for slot holes for disks (done)
    //--  Create CSS selector elements for columns, rows, container (done)
    //--  Create click handler for columns
            //--  Display red or black disk
            //-- Alternate between players
            //-- Keep track of what color disk is in which position in the board
    //--  Create win conditions for vertical, horizontal and diagonal (4 in a row - same color)
    //--  Make sure no more than 6 disks are placed in a column


// If you are unsure how to get started, here are some incremental milestones:

// Display a red or black disc.
// Stack red and black discs in a column using a flex box layout.
    //?  flex-direction: column-reverse;
// Display a full board consisting of 7 columns.
// Set a click handler function for each column that adds an additional disc.
// Take turns! Toggle the color of each successive disc added.
// Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
// Once a column is full (has 6 discs), don't allow any more discs to be added.
    //?  if columnOne,columnTwo, etc.childElementCount === 6....
// Check whether the last disc added completed a four-in-a-row within the column (vertically).
// Check whether the last disc added completed four-in-a-row horizontally.
// Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.

//create array to represent the board/:
connectFour = [
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],
    ['','','','','','',''],

]

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
            columnCounter[currentColumn]--
            // turnCounter++
            break;
        case col4:
            console.log(col4.children[columnCounter[3]])
            currentColumn = 3
            displayDisk(createDisk(), col4.children[columnCounter[3]])
            connectFour[columnCounter[3]][3] = currentPlayer
            columnCounter[3]--
            // turnCounter++
            break;
        case col5:
            console.log(col5.children[columnCounter[4]])
            currentColumn = 4
            displayDisk(createDisk(), col5.children[columnCounter[4]])
            connectFour[columnCounter[4]][4] = currentPlayer
            columnCounter[4]--
            // turnCounter++
            break;
        case col6:
            console.log(col6.children[columnCounter[5]])
            displayDisk(createDisk(), col6.children[columnCounter[5]])
            connectFour[columnCounter[5]][5] = currentPlayer
            columnCounter[5]--
            // turnCounter++
            break;
        case col7:
            console.log(col7.children[columnCounter[6]])
            displayDisk(createDisk(), col7.children[columnCounter[6]])
            connectFour[columnCounter[6]][6] = currentPlayer
            columnCounter[6]--
            // turnCounter++
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

const winningMove(board, piece) {
    //horizontal in python
    //for c in range(columnCount-3):
    //for r in range(rowCount):
    // if board[r][c] == piece and board[r][c+1] == piece and board[r][c+2] == piece and board[r][c+3]==piece:
    // return True

    //vertical locations can start in the bottom 4
    //for c in range(columnCount):
    //for r in range(rowCount-3):
    //if board[r][c] == piece and board[r+1][c] ==piece and board[r+2][c]==piece and board[r+3][c]==piece
    //loop over all columns minus 3 that couldn't start 4 in a row
    //loop over rows
}