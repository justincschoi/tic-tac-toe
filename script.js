const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];

    const getBoard = () => {
        return board;
    }

    const setField = (index, sign) => {
        board[index] = sign;
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

const user = function (sign) {
    return {
        sign
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
            gameBoard.setField(index, 'x');
            renderGameBoard();
        })
    })

    return {
        renderGameBoard
    }
})();

const gameController = (function () {
    const player1 =

        displayController.renderGameBoard();
})();

