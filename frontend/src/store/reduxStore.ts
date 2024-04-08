import {configureStore} from "@reduxjs/toolkit";
import carSlise from "./slices/carSlise.ts";
import {StoreInterface} from "../interfaces/storeInterface.ts";

export const store = configureStore<StoreInterface>({
    reducer:{
        cars:carSlise,
    }
})