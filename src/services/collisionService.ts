import { BOARD_WIDTH, BOARD_HEIGHT } from "./boardDimensionsService";
import { ShapePropsInterface } from "../models/shapeInterface";
import { CellInterface } from "../models/cellInterface";

export const checkMovementCollision = (direction: number, shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    if (direction == 1 && shape.location.x + shape.shape[0].length < BOARD_WIDTH && checkMovementBlockCollision(direction, shape, board)) {

        return true;

    }

    else if (direction == -1 && shape.location.x > 0 && checkMovementBlockCollision(direction, shape, board)) {

        return true;

    }

    else if (direction == 2 && shape.location.y + shape.shape.length < BOARD_HEIGHT && checkMovementBlockCollision(direction, shape, board)) {

        return true;

    }

    return false;

}

const checkMovementBlockCollision = (direction: number, shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    if (direction == 1) {

        return attemptingToMoveRight(shape, board);

    }

    else if (direction == -1) {

        return attemptingToMoveLeft(shape, board);

    }

    else if (direction == 2) {

        return attemptingToMoveDown(shape, board);

    }

    return false;

}

const attemptingToMoveRight = (shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    for (let i = 0; i < shape.shape.length; i++) {

        for (let j = shape.shape[i].length - 1; j >= 0; j--) {

            if (shape.shape[i][j] != 0 && board[shape.location.y + i][shape.location.x + j + 1].state != "empty") {

                return false;

            }

        }

    }

    return true;

}

const attemptingToMoveLeft = (shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    for (let i = 0; i < shape.shape.length; i++) {

        for (let j = 0; j < shape.shape[i].length; j++) {

            if (shape.shape[i][j] != 0 && board[shape.location.y + i][shape.location.x + j - 1].state != "empty") {

                return false;

            }

        }

    }

    return true;

}

const attemptingToMoveDown = (shape: ShapePropsInterface, board: CellInterface[][]): boolean => {

    for (let i = shape.shape.length - 1; i >= 0; i--) {

        for (let j = 0; j < shape.shape[i].length; j++) {

            if (shape.shape[i][j] != 0 && board[shape.location.y + i + 1][shape.location.x + j].state != "empty") {

                return false;

            }

        }

    }

    return true;

}