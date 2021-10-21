import React, { useState } from 'react';
import "./layout.css";
import Board from '../board/board';

const Layout = () => {

    const [board, setBoard] = useState([]);

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