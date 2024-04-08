import {CarInterface} from "./carInterface.ts";
import {store} from "../store/reduxStore.ts";

export interface CarsReduserInerface{
    page:number
    cars:CarInterface[]|undefined,
    totalNumber:number,
    selectedCar:CarInterface
}
export interface StoreInterface{
    cars:CarsReduserInerface,
}
export type AppDispatch = typeof store.dispatch