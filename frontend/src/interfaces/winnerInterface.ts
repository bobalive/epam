import {CarInterface} from "./carInterface.ts";

export interface CurrentWinnerInterface extends CarInterface{
    time:number
}
export interface WinnerInterface extends CurrentWinnerInterface{
    times:number
}
export interface WinnersInterface{
    currentWinner:CurrentWinnerInterface,
    winners:WinnerInterface[]
}
