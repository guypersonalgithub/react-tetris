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
    pickShape(): number[][],
    shapeInitialization(shapeType: number[][]): ShapePropsInterface

}