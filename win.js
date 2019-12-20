let winCount = 0;
let rowIndex = 0;
let columnIndex = 0;
let condition = null

function winColumn() {
    // console.log("Running winColumn");
    columnIndex = currentColumn.index;
    rowIndex = 0;
    winCount = 0;
    while (rowIndex < 7) {
        if (connectFour[columnIndex][rowIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            condition = 'win';
        }
        rowIndex++;
    }
}


function winRow() {
    // console.log("Running winRow");
    columnIndex = 0;
    rowIndex = currentColumn.childElementCount - 1;
    winCount = 0;
    while (columnIndex < 7) {
        if (connectFour[columnIndex][rowIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            condition = 'win';
        }
        columnIndex++;
    }
}


function winDiagonalRight() {
    // console.log("Running winDiagonalRight");
    columnIndex = currentColumn.index;
    rowIndex = (currentColumn.childElementCount - 1);
    winCount = 0;
    while (columnIndex > 0 && rowIndex > 0) {
        columnIndex--;
        rowIndex--;
    }
    while (columnIndex >= 0 && rowIndex >= 0 && columnIndex < 7 && rowIndex < 6) {
        if (connectFour[columnIndex][rowIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            condition = 'win';
        }
        columnIndex++;
        rowIndex++;
    }
}


function winDiagonalLeft() {
    // console.log("Running winDiagonalLeft");
    columnIndex = currentColumn.index;
    rowIndex = (currentColumn.childElementCount - 1);
    winCount = 0;
    while (columnIndex < 7 && rowIndex > 0) {
        columnIndex++;
        rowIndex--;
    }
    while (columnIndex >= 0 && rowIndex >= 0 && columnIndex < 7 && rowIndex < 6) {
        if (connectFour[columnIndex][rowIndex] == currentPlayer) {
            winCount++;
        } else { winCount = 0; }
        if (winCount === 4) {
            condition = 'win';
        }
        columnIndex--;
        rowIndex++;
    }
}


function winTie() {
    // console.log("Running winTie");
    columnIndex = 0;
    winCount = 0;
    while (columnIndex < 7 && winCount != -1) {
        if (connectFour[columnIndex][5] != undefined) {
            winCount++;
        } else { winCount = -1; }
        if (winCount === 7) {
            condition = 'tie'
        }
        columnIndex++;
    }
}

function notify(message) {
    let endMessage = document.createElement('div')
    let page = document.getElementById('container')
    endMessage.innerText = message
    page.appendChild(endMessage)
    return endMessage
}

function notifyWin() {
    switch(currentPlayer) {
        case 'R':
            let redWin = "RED WINS!"
            notify(redWin)
            break;
        case 'B':
            let blackWin = "BLACK WINS!"
            notify(blackWin)
            break;
    }
}
function notifyTie() {
    let notification = "It's a Tie! Try Again."
    notify(notification)
}

function checkForWin() {
    // console.log("Running checkForWin");
    winColumn();
    winRow();
    winDiagonalRight();
    winDiagonalLeft();
    winTie();
    if (condition === null) {
        console.log("next player's turn")
    } else if (condition === 'win') {
        console.log("Win")
        notifyWin()
    } else if (condition==='tie') {
        console.log("Tie")
        notifyTie()


    }
}

