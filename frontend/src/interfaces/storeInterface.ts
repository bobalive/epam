import {CarInterface, SelectedCarInterface} from "./carInterface.ts";
import {store} from "../store/reduxStore.ts";
import {WinnersInterface} from "./winnerInterface.ts";


export interface CarsReduserInerface{
    page:number
    cars:CarInterface[]|undefined,
    totalNumber:number,
    selectedCar:SelectedCarInterface,
}
export interface StoreInterface{
    cars:CarsReduserInerface,
    app:{
        isRace:boolean
    },
    winners:WinnersInterface
}
export type AppDispatch = typeof store.dispatch