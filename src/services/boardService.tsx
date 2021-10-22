import { CellInterface } from "../models/cellInterface";
import { BoardInterface } from "../models/boardInterface";

class Board implements BoardInterface {

    constructor(
        private _board: CellInterface[][]
    ) {}

    get board() : CellInterface[][] {

        return (this._board);

    }

    set board(newBoard: CellInterface[][]) {

        this._board = newBoard;

    }

    boardInitialization = (board_height: number, board_width: number) : CellInterface[][] => {

        let newBoard = [];

        for (let i = 0; i < board_height; i++) {

            let row = new Array(board_width);
            row.fill({
                type: 0,
                state: "empty"
            });

            newBoard.push(row);

        }

        return (newBoard);

    }

}

export const boardProperties = new Board([]);