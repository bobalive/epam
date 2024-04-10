import {
    CurrentWinnerInterface,
    Order,
    Sort, SortInterface,
    WinnerInterface,
    WinnersInterface
} from "../../interfaces/winnerInterface.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createNewWinner, deleteWinner, getWinners} from "../../api/winner.api.ts";
import {StoreInterface} from "../../interfaces/storeInterface.ts";
import {limitWinners} from "../../config/paginationLimit.ts";

const initialState:WinnersInterface ={
    winners:[],
    currentWinner:{
        id:-1,
        name:'',
        time:-1
    },
    totalWinners:0,
    page:1,
    sort:Sort.id,
    order:Order.acs
}
export const setAllWinners = createAsyncThunk(
    'fetch/winners',
    async (_arg,{getState})=>{
        const {winners} = getState() as StoreInterface
        const res = await getWinners({_sort:winners.sort , _order:winners.order,_limit:limitWinners,_page:winners.page})
        if(res){
            return res
        }
        return []
    }
)
export const setTotalWinnersCount = createAsyncThunk(
    'fetch/winnersCount',
    async ()=>{
        const res = await getWinners({_page:1,_limit:9999,_order:Order.acs,_sort:Sort.id})
        if(res){
            return res.length
        }
        return 0
    }
)
export const deleteWinnerCar  = createAsyncThunk(
    'delete/winner',
    deleteWinner
)
 const winnerSlice = createSlice({
    name:'winner',
    initialState,
    reducers:{
        setCurrnetWinner(state, action:PayloadAction<CurrentWinnerInterface>){
            if((state.currentWinner.id<0)){
                createNewWinner({id:action.payload.id,time:action.payload.time})
                state.currentWinner = {...action.payload}
            }
        },
        resetCurrentWinner(state,_action){
            state.currentWinner = {
                id:-1,
                name:'',
                time:-1,
            }
        },
        sortTable(state , action:PayloadAction<SortInterface>){
            state.sort = action.payload._sort
            state.order = action.payload._order
        },
        setWinners(state, action:PayloadAction<WinnerInterface[]>){
            state.winners = action.payload
        },
        setWinnerPage(state , action:PayloadAction<number>){
            state.page = action.payload
        }
    },
     extraReducers(builder){
            builder.addCase(setAllWinners.fulfilled , (state , action)=>{
                state.winners = action.payload
            })
         builder.addCase(setTotalWinnersCount.fulfilled , (state,action)=>{
             state.totalWinners = action.payload
         })
     }
})

export const {setCurrnetWinner, setWinners,resetCurrentWinner,setWinnerPage,sortTable} = winnerSlice.actions
export default winnerSlice.reducer

