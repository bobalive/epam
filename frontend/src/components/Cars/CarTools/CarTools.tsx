import s from './CarTools.module.scss'
import { Edit, Trash2} from "lucide-react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../interfaces/storeInterface.ts";
import {deleteCar, getNewCars, setSelectedCar} from "../../../store/slices/carSlise.ts";
import {CarPropsInterface} from "../Car/CarsPropsInterface.ts";
import {deleteWinnerCar} from "../../../store/slices/winnersSlice.ts";
export const CarTools = ({name, id,color,isSelected ,isRace,isStarted}:CarPropsInterface) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleDelete = ()=>{
        if(!isStarted && !isRace){
            dispatch(deleteCar(id))
            dispatch(deleteWinnerCar(id))
            dispatch(getNewCars())
        }
    }
    const handleSelect = ()=>{
        if(!isStarted && !isRace){
        dispatch(setSelectedCar({name,id,color}))
        }
    }
    return (
        <div className={s.toolContainer} >
            <h3 className={s.carTitle}>{name}</h3>
            <div>
                <div className={`${s.tool} ${isSelected&&s.active}`} onClick={handleSelect}>
                    <Edit/>
                    edit
                </div>
                <div className={s.tool} onClick={handleDelete}>
                    <Trash2/>
                    delete
                </div>
            </div>
        </div>
    )
}