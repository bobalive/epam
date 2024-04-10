import {CarInterface} from "../../../interfaces/carInterface.ts";

export  interface CarPropsInterface  extends  CarInterface{
    isSelected?:boolean,
    isStarted?:boolean,
    isRace?:boolean
}
