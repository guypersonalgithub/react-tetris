import React from 'react';
import { ShapeTypes } from '../../services/shapeTypeService';

interface Props {

    type: number

}

const Cell = (props: Props) => {

    const cellStyle = {

        width: "auto",
        backgroundColor: "rgba(" + ShapeTypes[props.type].color + ", 0.8)",
        borderBottom: "4px solid rgba(" + ShapeTypes[props.type].color + ", 0.1)",
        borderRight: "4px solid rgba(" + ShapeTypes[props.type].color + ", 1)",
        borderTop: "4px solid rgba(" + ShapeTypes[props.type].color + ", 1)",
        borderLeft: "4px solid rgba(" + ShapeTypes[props.type].color + ", 0.3)"

    }

    return (

        <div className = "cell" style = {cellStyle}></div>

    )

}

export default React.memo(Cell);