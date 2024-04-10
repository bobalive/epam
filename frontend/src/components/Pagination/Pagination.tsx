import {StepBack, StepForward} from "lucide-react";
import s from "./Pagination.module.scss"
import {PaginationInterface, PaginationType} from "./Pagination.interface.ts";
import {useDispatch, useSelector} from "react-redux";
import {getTotalCount, setPage} from "../../store/slices/carSlise.ts";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {useEffect} from "react";
import {setIsRace} from "../../store/slices/appSlice.ts";

export const Pagination = ({page,type}:PaginationInterface) => {
    const dispatch = useDispatch<AppDispatch>()
    const totalPage = useSelector((store:StoreInterface)=>store.cars.totalNumber)
    useEffect(() => {
        if(type == PaginationType.garage){
            dispatch(getTotalCount())
        }
    }, []);
    const changePage = (page:number)=>{
        dispatch(setPage(page))
        dispatch(setIsRace(false))
    }
  return(
      <div className={s.pagination}>
          Page {page}/{Math.ceil(totalPage/7)}
          <div className={s.icons}></div>
          <div className={s.icon} onClick={()=> {
              if(page>1){
              changePage(--page)
              }
          }}>
              <StepBack/>
          </div>
         <div className={s.icon}  onClick={()=> {
             if(page<=totalPage/7){
             changePage(++page)
             }
         }}>
             <StepForward/>
         </div>
      </div>
  )
}