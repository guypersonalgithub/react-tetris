import { ScoreInterface } from "../models/scoreInterface";

class Score implements ScoreInterface {

    constructor(
        private _score: number
    ){}

    get score() {

        return this._score;

    }

    set score(newScore: number) {

        this._score = newScore;

    }

    initializeScore = (): number => {

        return 0;

    }

    increaseScore = (addedScore: number): number => {

        let newScore = this._score + addedScore;

        return newScore;

    }

}

export const scoreProperties = new Score(0);