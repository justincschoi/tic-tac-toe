const gameBoard = (function () {
    const board = ['', '', '', '', '', '', '', '', ''];

    const setField = (index, sign) => {
        board[index] = sign;
    }

    const getField = (index) => {
        return board[index];
    }
})();

const user = function (sign) {
    return { sign };
}

const displayController = (function () {

})();
