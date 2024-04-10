import s from "./Tools.module.scss"
import {Button} from "../../shared/ui/Button/Button.tsx";
import {Tool} from "./Tool/Tool.tsx";
import {useDispatch, useSelector} from "react-redux";
import {createNewCar, getNewCars, resetPositions, upadateCar} from "../../store/slices/carSlise.ts";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {CarInterface} from "../../interfaces/carInterface.ts";
import {getRandomCar} from "../../shared/helpers/getRandomCar.ts";
import {getRandomColor} from "../../shared/helpers/getRandomColor.ts";
import {setIsRace} from "../../store/slices/appSlice.ts";
import {resetCurrentWinner} from "../../store/slices/winnersSlice.ts";

export const Tools = ()=>{
    const dispatch = useDispatch<AppDispatch>()
    const {id,color,name} = useSelector<StoreInterface,CarInterface>((store)=>store.cars.selectedCar)
    const isRace = useSelector<StoreInterface , boolean>(store=> store.app.isRace)
    const create = (color:string , name:string)=>{
        dispatch(createNewCar({name,color}))
        dispatch(getNewCars())
    }
    const handleChange= (color:string,name:string,id:number)=>{
        dispatch(upadateCar({name,id,color}))
    }
    const generate = ()=>{
        for(let i= 0 ; i<100; i++){
            dispatch(createNewCar({name:getRandomCar() ,color:getRandomColor()}))
        }
        dispatch(getNewCars())
    }
    const handleReset = ()=>{
        dispatch(setIsRace(false))
        dispatch(resetPositions({}))
        dispatch(resetCurrentWinner({}))
    }
    return(
        <div className={s.toolsContainer}>
            <Tool name={''} color={'0000'} submit={create} type={"active"}>Create Car</Tool>
            <Tool id={id} color={color} name={name} type={id >0?"default":"disabled"} submit={handleChange} >Edit Car</Tool>
            <div className={s.toolsFooter}>
            <Button state={!isRace?"default":'disabled'} onClick={()=>dispatch(setIsRace(true))}>Race</Button>
            <Button state={!isRace?"disabled":"default"} onClick={handleReset}>Reset</Button>
            <Button state={"active"} onClick={generate}>Generate Cars</Button>
            </div>
        </div>
    )
}