import {CurrentWinnerInterface} from "../../../interfaces/winnerInterface.ts";

export interface WinnerBodyPropsInterface extends CurrentWinnerInterface{
    color:string,
    wins:number
}