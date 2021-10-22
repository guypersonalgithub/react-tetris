import { CellInterface } from "./cellInterface";

export interface BoardInterface {

    board: CellInterface[][];
    boardInitialization(): CellInterface[][];

}