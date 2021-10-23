export interface ScoreInterface {

    score: number,
    initializeScore: () => number,
    increaseScore: (addedScore: number) => number

}
