import { CellInterface } from "./cellInterface";
import { ShapePropsInterface } from "./shapeInterface";

export interface BoardInterface {

    board: CellInterface[][],
    boardInitialization : () => CellInterface[][],
    clearEmptyCells : () => CellInterface[][],
    updateShapeOnBoard : (shape: ShapePropsInterface) => CellInterface[][]

}