import {Header} from "../../components/Header/Header.tsx";
import {Tools} from "../../components/Tools/Tools.tsx";
import s from './Garage.module.scss'
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Cars} from "../../components/Cars/Cars.tsx";
import {useEffect} from "react";
import {getNewCars} from "../../store/slices/carSlise.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";

export const Garage= ()=>{
    const dispatch = useDispatch<AppDispatch>()
    const {page,totalNumber}= useSelector((store:StoreInterface)=> store.cars)

    useEffect(() => {
        dispatch(getNewCars());
    }, [dispatch, page]);
    return(
       <div>
           <Header/>
           <Tools />
           <div className={s.carsCount}>
               Cars {totalNumber}
           </div>
           <Pagination page={page}/>
           <Cars/>
       </div>
    )
}