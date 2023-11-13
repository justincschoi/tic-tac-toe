const gameBoard = (function () {
    const board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    const getBoard = () => {
        return board;
    }

    const setField = (index, sign) => {
        return board[index] = sign;
    }

    const getField = (index) => {
        return board[index];
    }

    return {
        getBoard,
        setField,
        getField
    }
})();

const player = function (sign) {
    const getSign = () => sign;

    return {
        getSign
    };
}

const displayController = (function () {
    const boardContainer = document.querySelector('.board-container');
    const fields = boardContainer.querySelectorAll('.field');

    const renderGameBoard = () => {
        fields.forEach((field, index) => {
            field.textContent = gameBoard.getField(index);
        })
    };

    fields.forEach((field, index) => {
        field.addEventListener('click', () => {
            gameController.playRound(index);
            renderGameBoard();
        })
    })

    return {
        renderGameBoard
    }
})();

const gameController = (function () {
    const playerX = player('X');
    const playerO = player('O');
    let round = 1;
    let gameOver = false;

    const checkWin = (sign) => {
        //Checking rows
        for (let row = 0; row < 3; row++) {
            if (
                gameBoard.getField(row * 3) === sign &&
                gameBoard.getField(row * 3 + 1) === sign &&
                gameBoard.getField(row * 3 + 2) === sign
            ) {
                return true;
            }
        }
        //Checking columns
        for (let col = 0; col < 3; col++) {
            if (
                gameBoard.getField(col) === sign &&
                gameBoard.getField(col + 3) === sign &&
                gameBoard.getField(col + 6) === sign
            ) {
                return true;
            }
        }
        //Checking diagonals
        if (
            (gameBoard.getField(0) === sign && gameBoard.getField(4) === sign && gameBoard.getField(8) === sign) ||
            (gameBoard.getField(2) === sign && gameBoard.getField(4) === sign && gameBoard.getField(6) === sign)
        ) {
            return true;
        }

        return false;
    };

    const playRound = (index) => {
        if (!gameOver && gameBoard.getField(index) === '') {
            gameBoard.setField(index, getCurrentPlayer());
            const check = checkWin(getCurrentPlayer());
            if (check) {
                console.log(round)
                gameOver = true;
            }

        }
        round++;
    };

    const getCurrentPlayer = () => {
        return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
    }

    return {
        checkWin,
        playRound
    }
})();

