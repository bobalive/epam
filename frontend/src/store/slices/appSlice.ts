import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isRace:false,
}

const appSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setIsRace(state, action:PayloadAction<boolean>){
            state.isRace = action.payload
        }
    }
})

export const {setIsRace} = appSlice.actions
export default appSlice.reducer