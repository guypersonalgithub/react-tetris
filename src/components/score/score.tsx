import React, {} from 'react';

interface ScoreProps {

    score: number

}

const Score = (props: ScoreProps) => {

    return (

        <div className = "tetrisScore">

            Score: {props.score}

        </div>

    )

}

export default Score;