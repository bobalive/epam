import {StepBack, StepForward} from "lucide-react";
import s from "./Pagination.module.scss"
import {PaginationInterface, PaginationType} from "./Pagination.interface.ts";
import {useDispatch, useSelector} from "react-redux";
import {getTotalCount, setPage} from "../../store/slices/carSlise.ts";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {useEffect} from "react";
import {setIsRace} from "../../store/slices/appSlice.ts";
import {setTotalWinnersCount, setWinnerPage} from "../../store/slices/winnersSlice.ts";
import {limitgarage, limitWinners} from "../../config/paginationLimit.ts";

export const Pagination = ({page,type}:PaginationInterface) => {
    const dispatch = useDispatch<AppDispatch>()
    const totalPage = useSelector((store:StoreInterface)=> type == PaginationType.garage? store.cars.totalNumber: store.winners.totalWinners)

    useEffect(() => {
        if(type == PaginationType.garage){
            dispatch(getTotalCount())
        }else{
            dispatch(setTotalWinnersCount())
        }
    }, []);
    const changePage = (page:number)=>{
        if(type ===PaginationType.garage){
            dispatch(setPage(page))
            dispatch(setIsRace(false))
        }else{
            dispatch(setWinnerPage(page))
        }

    }
  return(
      <div className={s.pagination}>
          Page {page}/{Math.ceil(totalPage/(type == PaginationType.garage?limitgarage:limitWinners))}
          <div className={s.icons}></div>
          <div className={s.icon} onClick={()=> {
              if(page>1){
              changePage(--page)
              }
          }}>
              <StepBack/>
          </div>
         <div className={s.icon}  onClick={()=> {
             if(page<=totalPage/(type == PaginationType.garage?limitgarage:limitWinners)){
             changePage(++page)
             }
         }}>
             <StepForward/>
         </div>
      </div>
  )
}