import s from './Cars.module.scss'
import {Car} from "./Car/Car.tsx";
import {useSelector} from "react-redux";
import {StoreInterface} from "../../interfaces/storeInterface.ts";

export const Cars = ()=>{
    const cars = useSelector((state:StoreInterface) => state.cars.cars);
    const selectedId = useSelector((state:StoreInterface) => state.cars.selectedCar.id)
    return (
        <div className={s.cars}>
            {cars?.map(car => (
                <Car key={car.id} {...car} isSelected={selectedId == car.id}/>
            ))}
        </div>
    );
}