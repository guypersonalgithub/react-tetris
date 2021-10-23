import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./layout.css";
import Board from '../board/board';
import Score from '../score/score';
import { CellInterface } from '../../models/cellInterface';
import { ShapePropsInterface } from '../../models/shapeInterface';
import { boardProperties } from '../../services/boardService';
import { shapeProperties } from '../../services/shapeService';
import { scoreProperties } from '../../services/scoreService';

const Layout = () => {

    const [board, setBoard] = useState<CellInterface[][]>([]);
    const [shape, setShape] = useState<ShapePropsInterface>({location: {x: 0, y: 0}, shape: []});
    const [gameState, setGameState] = useState<string>("");
    const [score, setScore] = useState<number>(0);
    const [delay, setDelay] = useState<number>(0);
    const dropInterval = useRef<ReturnType<typeof setInterval>>();

    useEffect(() => {

        if (gameState != "") {

            let updatedBoard = boardProperties.updateShapeOnBoard(shape);
            boardProperties.board = updatedBoard;
            setBoard(updatedBoard);

        }

    }, [shape, gameState]);

    const shapeIsStopped = useCallback(() => {

        setDelay(0);
        let shapeWasStoppedInsideTheBoard = boardProperties.changeCellsStateAfterDrop(shapeProperties);
        let clearedRowsBoard = boardProperties.clearFullRowsAfterDrop(shapeWasStoppedInsideTheBoard);
        boardProperties.board = clearedRowsBoard.clearRowsBoard;
        setBoard(boardProperties.board);
        scoreProperties.increaseScore(clearedRowsBoard.addedScore);
        setScore(scoreProperties.score);
        generateNewShape();

    }, [score]);

    useEffect(() => {

        if (gameState != "" && gameState != "end" && delay != 0) {

            dropInterval.current = setInterval(() => {

                let fallingShape = shapeProperties.moveShape("down", boardProperties.board);
                if (fallingShape && fallingShape.canMove) {

                    shapeProperties.location = fallingShape.shapeProperties.location;
                    shapeProperties.shape = fallingShape.shapeProperties.shape;
                    setShape(fallingShape.shapeProperties);
    
                }

                else {

                    shapeIsStopped();

                }

            }, delay);

        }

        return () => {

            clearInterval(dropInterval.current!);
            
        }

    }, [gameState, delay]);

    const toggleGameState = (): void => {

        if (gameState == "" || gameState == "end") {

            let initBoard = boardProperties.boardInitialization();
            boardProperties.board = initBoard;
            setBoard(initBoard);
            setGameState("start");
            generateNewShape();

        }

        else {

            setGameState("end");
            setDelay(0);

        }

    }

    const moveShape = (key: React.KeyboardEvent<HTMLDivElement>): void => {

        if (gameState != "" && gameState != "end") {

            let moveShape;
            let rotateShape;

            if (key.code == "ArrowLeft") {

                moveShape = shapeProperties.moveShape("left", boardProperties.board);

            }

            else if (key.code == "ArrowRight") {

                moveShape = shapeProperties.moveShape("right", boardProperties.board);

            }

            else if (key.code == "ArrowDown") {

                moveShape = shapeProperties.moveShape("down", boardProperties.board);

            }

            else if (key.code == "ArrowUp") {

                rotateShape = shapeProperties.placeShape(boardProperties.board);

            }

            if (moveShape && moveShape.canMove) {

                shapeProperties.location = moveShape.shapeProperties.location;
                shapeProperties.shape = moveShape.shapeProperties.shape;
                setShape(moveShape.shapeProperties);

            }

            else if (rotateShape && rotateShape.canBePlaced) {

                shapeProperties.location = rotateShape.shapeProperties.location;
                shapeProperties.shape = rotateShape.shapeProperties.shape;
                setShape(rotateShape.shapeProperties);

            }

            else if (moveShape && !moveShape.canMove && key.code == "ArrowDown") {

                shapeIsStopped();

            }

        }

    }

    const generateNewShape = () => {

        let newShapeType = shapeProperties.pickShape();
        let newShape = shapeProperties.shapeInitialization(newShapeType, boardProperties.board);
        if (newShape.shape.length > 0) {

            shapeProperties.location = newShape.location;
            shapeProperties.shape = newShape.shape;
            setShape(newShape);
            setDelay(1000);

        }

        else {

            setGameState("end");
            setDelay(0);

        }

    }

    return (
        <div className = "layout" role = "button" tabIndex = {0} onKeyDown={event => moveShape(event)}>
            <div className = "tetrisContainer">
                <Board board = {board} />
            </div>
            <div className = "tetrisMenu">
                <Score score = {score} />
                {gameState == "" || gameState == "end" ? <button className = "stateButton" onClick={toggleGameState}>Start</button> : <button className = "stateButton" onClick={toggleGameState}>Concede</button>}
            </div>
        </div>
    )

}

export default Layout;