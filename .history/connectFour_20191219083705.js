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

let playerBlack = "black"
let playerRed = "red"
let currentPlayer = playerBlack
let currentColumn = null

//click handler:
let col1 = document.getElementById('1')
let col2 = document.getElementById('2')
let col3 = document.getElementById('3')
let col4 = document.getElementById('4')
let col5 = document.getElementById('5')
let col6 = document.getElementById('6')
let col7 = document.getElementById('7')

// turns: black on even values of turnCounter, and red on odd values of turnCounter
let turnCounter = 0

const createDisk = function() {
    let top = document.createElement('div')
    top.classList.add('row')
    if (turnCounter%2===0) { //even
        currentPlayer = PlayerBlack
        top.classList.add('black')
    } else if (turnCounter%2!==0) { //odd
        currentPlayer = PlayerRed
        top.classList.add('red')
    }
    return top
}

const addDiskToColumn = (event) => {
    if (currentColumn == null) {
        console.log(event.currentTarget.id)

    switch (event.currentTarget) {
        case col1:
    }
    }
    turnCounter++

}
col1.addEventListener('click', addDiskToColumn)
col2.addEventListener('click', addDiskToColumn)
col3.addEventListener('click', addDiskToColumn)
col4.addEventListener('click', addDiskToColumn)
col5.addEventListener('click', addDiskToColumn)
col6.addEventListener('click', addDiskToColumn)
col7.addEventListener('click', addDiskToColumn)



//win conditions:

//vertical win:

//horizontal win:

//diagonal win:

