import { CellInterface } from "./cellInterface";

export interface BoardInterface {

    board: CellInterface[][],
    boardInitialization(board_height: number, board_width: number): CellInterface[][]

}