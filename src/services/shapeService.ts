import { ShapeInterface, ShapePropsInterface } from "../models/shapeInterface";
import { ShapeTypes } from "./shapeTypeService";

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

    shapeInitialization = (shapeType: number[][]): ShapePropsInterface => {

        let shapeProps = {
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

        return shapeProps;

    }

}

export const shape = new Shape({x: 0, y: 0}, []);