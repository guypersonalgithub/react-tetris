import React, { useState, useEffect } from 'react';
import "./layout.css";
import Board from '../board/board';
import { CellInterface } from '../../models/cellInterface';
import { ShapePropsInterface } from '../../models/shapeInterface';
import { boardProperties } from '../../services/boardService';
import { shapeProperties } from '../../services/shapeService';

const Layout = () => {

    const [board, setBoard] = useState<CellInterface[][]>([]);
    const [shape, setShape] = useState<ShapePropsInterface>({location: {x: 0, y: 0}, shape: []});
    const [gameState, setGameState] = useState<string>("");

    useEffect(() => {

        if (gameState != "") {

            let updatedBoard = boardProperties.updateShapeOnBoard(shape);
            boardProperties.board = updatedBoard;
            setBoard(updatedBoard);

        }

    }, [shape, gameState]);

    const toggleGameState = (): void => {

        if (gameState == "" || gameState == "end") {

            let initBoard = boardProperties.boardInitialization();
            boardProperties.board = initBoard;
            setBoard(initBoard);
            setGameState("start");
            let newShapeType = shapeProperties.pickShape();
            let newShape = shapeProperties.shapeInitialization(newShapeType);
            shapeProperties.location = newShape.location;
            shapeProperties.shape = newShape.shape;
            setShape(newShape);

        }

        else {

            setShape({location: {x: 0, y: 0}, shape: []});
            setGameState("end");

        }

    }

    return (
        <div className = "layout" role = "button">
            <div className = "tetrisContainer">
                <Board board = {board} />
            </div>
            <div className = "tetrisMenu">
            {gameState == "" || gameState == "end" ? <button className = "stateButton" onClick={toggleGameState}>Start</button> : <button className = "stateButton" onClick={toggleGameState}>Concede</button>}
            </div>
        </div>
    )

}

export default Layout;