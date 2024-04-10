import {Tools} from "../../components/Tools/Tools.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Cars} from "../../components/Cars/Cars.tsx";
import {useEffect} from "react";
import {getNewCars} from "../../store/slices/carSlise.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {WinnerModal} from "../../components/WinnerModal/WinnerModal.tsx";
import {PaginationType} from "../../components/Pagination/Pagination.interface.ts";
import {TotalCount} from "../../shared/ui/TotalCount/TotalCount.tsx";

export const Garage= ()=>{
    const dispatch = useDispatch<AppDispatch>()
    const {page,totalNumber}= useSelector((store:StoreInterface)=> store.cars)
    useEffect(() => {
        dispatch(getNewCars());
    }, [dispatch, page]);
    return(
       <div>
           <WinnerModal/>
           <Tools />
           <TotalCount totalNumber={totalNumber||0} name={'Cars'}/>
           <Pagination type={PaginationType.garage} page={page}/>
           <Cars/>
       </div>
    )
}