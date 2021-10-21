import { CellInterface } from "../models/cellInterface";
import { BoardInterface } from "../models/boardInterface";

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

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

}

export const boardProperties = new Board([]);