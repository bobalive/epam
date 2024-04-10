import {Tools} from "../../components/Tools/Tools.tsx";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {Cars} from "../../components/Cars/Cars.tsx";
import {WinnerModal} from "../../components/WinnerModal/WinnerModal.tsx";
import {PaginationType} from "../../components/Pagination/Pagination.interface.ts";
import {TotalCount} from "../../shared/ui/TotalCount/TotalCount.tsx";
import {GarageProps} from "./GarageProps.ts";
import {useSelector} from "react-redux";
import {StoreInterface} from "../../interfaces/storeInterface.ts";

export const Garage= ({page}:GarageProps)=>{
    const totalNumber = useSelector<StoreInterface,number>(state => state.cars.totalNumber)

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