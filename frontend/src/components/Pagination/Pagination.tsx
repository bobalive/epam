import { StepBack, StepForward} from "lucide-react";
import s from "./Pagination.module.scss"
import {PaginationInterface} from "./Pagination.interface.ts";
import {useDispatch, useSelector} from "react-redux";
import {getTotalCount, setPage} from "../../store/slices/carSlise.ts";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {useEffect} from "react";
export const Pagination = ({page}:PaginationInterface) => {
    const dispatch = useDispatch<AppDispatch>()
    const totalPage = useSelector((store:StoreInterface)=>store.cars.totalNumber)
    useEffect(() => {
        dispatch(getTotalCount())
    }, []);
    const changePage = (page:number)=>{
        if(page>0 && page<=totalPage/7+1)
        dispatch(setPage(page))
    }
  return(
      <div className={s.pagination}>
          Page {page}/{Math.ceil(totalPage/7)}
          <div className={s.icons}></div>
          <div className={s.icon} onClick={()=>changePage(--page)}>
              <StepBack/>
          </div>
         <div className={s.icon}  onClick={()=>changePage(++page)}>
             <StepForward/>
         </div>
      </div>
  )
}