import {CurrentWinnerInterface, WinnerInterface, WinnersInterface} from "../../interfaces/winnerInterface.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
const initialState:WinnersInterface ={
    winners:[],
    currentWinner:{
        id:-1,
        color:'',
        name:'',
        position:0,
        time:-1
    }
}
 const winnerSlice = createSlice({
    name:'winner',
    initialState,
    reducers:{
        setCurrnetWinner(state, action:PayloadAction<CurrentWinnerInterface>){
            if((state.currentWinner.id<0)){
                state.currentWinner = {...action.payload}
            }
        },
        resetCurrentWinner(state,_action){
            state.currentWinner = {
                id:-1,
                color:'',
                name:'',
                time:-1,
                position:0
            }
        }
        ,
        setWinners(state, action:PayloadAction<WinnerInterface[]>){
            state.winners = action.payload
        }
    }
})

export const {setCurrnetWinner, setWinners,resetCurrentWinner} = winnerSlice.actions
export default winnerSlice.reducer

