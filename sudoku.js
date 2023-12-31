let board = Array(9).fill().map(() => Array(9).fill(0));

function generateBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
        }
    }
    return board;
}

function drawBoard(board) {
    let sudokuBoard = document.getElementById('sudoku-board');
    sudokuBoard.innerHTML = ''; // 先清空棋盘
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('div');
            cell.innerText = board[i][j];
            cell.classList.add('cell');
            sudokuBoard.appendChild(cell);
        }
    }
}

let generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function () {
    let newBoard = generateBoard(board);
    drawBoard(newBoard);
});

drawBoard(board); // 绘制初始棋盘
/* ...其它 JavaScript 代码... */

function drawBoard(board) {
    let sudokuBoard = document.getElementById('sudoku-board');
    sudokuBoard.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement('div');
            cell.innerText = board[i][j];
            cell.classList.add('cell');

            if (i % 3 === 0) cell.classList.add('bordered-top');       // 每个3x3区域的顶部单元格
            if (i % 3 === 2) cell.classList.add('bordered-bottom');    // 每个3x3区域的底部单元格
            if (j % 3 === 0) cell.classList.add('bordered-left');      // 每个3x3区域的左边单元格
            if (j % 3 === 2) cell.classList.add('bordered-right');     // 每个3x3区域的右边单元格

            sudokuBoard.appendChild(cell);
        }
    }
}

/* ...其它 JavaScript 代码... */