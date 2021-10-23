import { CellInterface } from "./cellInterface";

export interface ShapePropsInterface {

    location: {

        x: number,
        y: number

    },
    shape: number[][],

}

export interface ShapeInterface {

    location: {

        x: number,
        y: number

    },
    shape: number[][],
    pickShape : () => number[][],
    shapeInitialization : (shapeType: number[][]) => ShapePropsInterface,
    moveShape : (direction: string, board: CellInterface[][]) => {canMove: boolean, shapeProperties: ShapePropsInterface},
    placeShape : (board: CellInterface[][]) => {canBePlaced: boolean, shapeProperties: ShapePropsInterface}

}