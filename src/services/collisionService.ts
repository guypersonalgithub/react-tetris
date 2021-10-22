import { BOARD_WIDTH, BOARD_HEIGHT } from "./boardDimensionsService";
import { ShapePropsInterface } from "../models/shapeInterface";
import { CellInterface } from "../models/cellInterface";

export const checkMovementCollision = (direction: number, shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    if (direction == 1 && shape.location.x + shape.shape[0].length < BOARD_WIDTH) {

        return true;

    }

    else if (direction == -1 && shape.location.x > 0) {

        return true;

    }

    else if (direction == 2 && shape.location.y + shape.shape.length < BOARD_HEIGHT) {

        return true;

    }

    return false;

}