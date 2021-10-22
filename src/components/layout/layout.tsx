import React, { useState, useEffect } from 'react';
import "./layout.css";
import Board from '../board/board';
import { CellInterface } from '../../models/cellInterface';
import { ShapePropsInterface } from '../../models/shapeInterface';
import { boardProperties } from '../../services/boardService';

const Layout = () => {

    const [board, setBoard] = useState<CellInterface[][]>([]);
    const [shape, setShape] = useState<ShapePropsInterface>();

    return (
        <div className = "layout">
            <div className = "tetrisContainer">
                <Board board = {board} />
            </div>
            <div className = "tetrisMenu"></div>
        </div>
    )

}

export default Layout;