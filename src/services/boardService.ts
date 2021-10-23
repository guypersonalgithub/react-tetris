import { CellInterface } from "../models/cellInterface";
import { BoardInterface } from "../models/boardInterface";
import { BOARD_WIDTH, BOARD_HEIGHT } from "./boardDimensionsService";
import { ShapePropsInterface } from "../models/shapeInterface";

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

    boardInitialization = () : CellInterface[][] => {

        let newBoard = [];

        for (let i = 0; i < BOARD_HEIGHT; i++) {

            let row = new Array(BOARD_WIDTH);
            row.fill({
                type: 0,
                state: "empty"
            });

            newBoard.push(row);

        }

        return (newBoard);

    }

    clearEmptyCells = () : CellInterface[][] => {

        let clearedBoard: CellInterface[][] = this._board.map((row: CellInterface[]) => {

            return (

                row.map((cell: CellInterface) => {

                    if (cell.type != 0 && cell.state == "empty") {

                        return ({ type: 0, state: "empty" });   

                    }   

                    return (cell);

                })

            );

        });

        return (clearedBoard);

    }

    updateShapeOnBoard = (shape: ShapePropsInterface) : CellInterface[][] => {

        let clearBoard = this.clearEmptyCells();

        for (let i = 0; i < shape.shape.length; i++) {

            for (let j = 0; j < shape.shape[i].length; j++) {

                if (shape.shape[i][j] != 0) {

                    clearBoard[i + shape.location.y][j + shape.location.x] = {
    
                        type: shape.shape[i][j],
                        state: "empty"
    
                    }
    
                }

            }

        }

        return clearBoard;

    }

    changeCellsStateAfterDrop = (shape: ShapePropsInterface) : CellInterface[][] => {

        let clearBoard = this.clearEmptyCells();

        for (let i = 0; i < shape.shape.length; i++) {

            for (let j = 0; j < shape.shape[i].length; j++) {
    
                if (shape.shape[i][j] != 0 && clearBoard[shape.location.y + i][shape.location.x + j].state == "empty") {
    
                    clearBoard[shape.location.y + i][shape.location.x + j] = {
    
                        type: shape.shape[i][j],
                        state: "full"
    
                    }
    
                }
    
            }
    
        }

        return (clearBoard);

    }

}

export const boardProperties = new Board([]);