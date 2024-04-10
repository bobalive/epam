import {configureStore} from "@reduxjs/toolkit";
import carSlise from "./slices/carSlise.ts";
import {StoreInterface} from "../interfaces/storeInterface.ts";
import appSlice from "./slices/appSlice.ts";
import winnerSlice from "./slices/winnersSlice.ts";

export const store = configureStore<StoreInterface>({
    reducer:{
        cars:carSlise,
        app:appSlice,
        winners:winnerSlice
    }
})