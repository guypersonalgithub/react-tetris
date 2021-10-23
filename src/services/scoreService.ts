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

        this._score = this._score + addedScore;

        return this._score;

    }

}

export const scoreProperties = new Score(0);