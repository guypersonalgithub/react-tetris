import { CellInterface } from "../models/cellInterface";
import { ShapeInterface, ShapePropsInterface } from "../models/shapeInterface";
import { ShapeTypes } from "./shapeTypeService";
import { checkMovementCollision, checkRotationOrPlacementCollision } from './collisionService';

class Shape implements ShapeInterface {

    constructor(
        private _location: {
            x: number,
            y: number
        },
        private _shape: number[][]
    ) {}

    get location() {

        return (this._location);

    }

    set location(newLocation: { x: number, y: number}) {

        this._location = newLocation;

    }

    get shape() {

        return (this._shape);

    }

    set shape(newShape: number[][]) {

        this._shape = newShape;

    }

    pickShape = (): number[][] => {

        let shapeOptions = Object.keys(ShapeTypes).length - 1;
        let randomPicker = Math.floor(Math.random() * shapeOptions) + 1;
        return (ShapeTypes[randomPicker].shape);

    }

    shapeInitialization = (shapeType: number[][], board: CellInterface[][]): ShapePropsInterface => {

        let shapeProps : ShapePropsInterface = {
            location: {
                x: 0,
                y: 0
            },
            shape: shapeType
        }

        if (shapeProps.shape[0].length == 1) {

            shapeProps.location.x = 5;

        }

        else if (shapeProps.shape[0].length == 2 || shapeProps.shape[0].length == 3) {

            shapeProps.location.x = 4;

        }

        let canShapeBePlaced = checkRotationOrPlacementCollision(shapeProps, board);

        if (canShapeBePlaced) {

            return shapeProps;

        }

        return {location: {x: 0, y: 0}, shape: []};

    }

    moveShape = (direction: string, board: CellInterface[][]) : {canMove: boolean, shapeProperties: ShapePropsInterface} => {

        let directionNumber: number;

        if (direction == "right") {

            directionNumber = 1;

        }
        
        else if (direction == "left") {

            directionNumber = -1;

        }

        else {

            directionNumber = 2;

        }

        let canMove = checkMovementCollision(directionNumber, {location: this._location, shape: this._shape}, board);

        let shapeProps : ShapePropsInterface = {

            location: {

                x: 0,
                y: 0

            },
            shape: []

        };

        if (canMove) {

            shapeProps.location = {

                x: (directionNumber == -1 || directionNumber == 1) ? this._location.x + directionNumber : this._location.x,
                y: directionNumber == 2 ? this._location.y + 1 : this._location.y

            }

            shapeProps.shape = this._shape.map((row: number[]) => {

                return (
    
                    row.map((cell: number) => {
    
                        return (cell);
    
                    })
    
                );

            });

        }

        return ({canMove: canMove, shapeProperties: shapeProps});

    }

    placeShape = (board: CellInterface[][]) : {canBePlaced: boolean, shapeProperties: ShapePropsInterface} => {

        let placedShape: ShapePropsInterface = {

            location: { 

                x: this._location.x, 
                y: this._location.y 
            
            },

            shape: []

        };

        for (let i = 0; i < this._shape[0].length; i++) {

            let row = [];

            for (let j = this._shape.length - 1; j >= 0; j--) {

                row.push(this._shape[j][i]);

            }

            placedShape.shape.push(row);

        }

        let canBePlaced = checkRotationOrPlacementCollision(placedShape, board);

        return ({canBePlaced: canBePlaced, shapeProperties: placedShape});

    }

}

export const shapeProperties = new Shape({x: 0, y: 0}, []);