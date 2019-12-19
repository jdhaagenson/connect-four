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
        if (gridArray[columnIndex][rowIndex] == currentPlayer) {
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
        if (gridArray[columnIndex][rowIndex] == currentPlayer) {
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
        if (gridArray[columnIndex][rowIndex] == currentPlayer) {
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
        if (gridArray[columnIndex][rowIndex] == currentPlayer) {
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
        if (gridArray[columnIndex][5] != undefined) {
            winCount++;
        } else { winCount = -1; }
        if (winCount === 7) {
            condition = 'tie'
        }
        columnIndex++;
    }

function createWin(message) {
    let winMessage = document.createElement('div')
    let page = document.getElementById('container')
    winMessage.innerText = message
    page.appendChild(winMessage)
    return winMessage
}

function winNotify() {
    switch(currentPlayer) {
        case 'red':
            let win = "RED WINS!"
            createWin(win)
            break;
        case 'black':
            let win = "BLACK WINS!"
            createWin(win)
            break;
        case 'default':
            let win = "Win was accidentally triggered"
            createWin(win)
            break;

    }
    if (currentPlayer == 'red'){
        let win = "BLACK WINS!";
        createWin()
    } else if (currentPlayer == 'black'){
        let win = "RED WINS!";
        createWin()
    }
    location.reload();
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
        console.log("You Win!")
        let winDiv = document.createElement('div')
        winDiv.innerText = currentPlayer +"Wins!"
    }
}
checkForWin()}
