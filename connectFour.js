//Lori Henderson (PM), Michael Byfield, Jordan Haagenson, Cory Schlaudecker

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
    "OOOOOOO",
    "OOOOOOO",
    "OOOOOOO",
    "OOOOOOO",
    "OOOOOOO",
    "OOOOOOO"
]

playerBlack = "B"
playerRed = "R"

//click handler:
let columns = document.querySelector(".column")
let rows = document.querySelector(".row")



//win conditions:

//vertical win:

//horizontal win:

//diagonal win:

