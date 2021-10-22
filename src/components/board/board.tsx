import React from 'react';
import "./board.css";
import Cell from '../cell/cell';
import { CellInterface } from '../../models/cellInterface';

interface BoardProps {

    board: CellInterface[][]

}

const Board = (props: BoardProps) => {

    return (

        <div className = "board">

            {props.board.map((row: CellInterface[]) => {

                return (

                    row.map((cell: CellInterface, index: number) => {

                        return (

                            <Cell type = {cell.type} key = {index} />

                        );      

                    })

                );

            })}

        </div>

    )

}

export default Board;