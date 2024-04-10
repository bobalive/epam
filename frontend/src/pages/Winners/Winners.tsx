import {TotalCount} from "../../shared/ui/TotalCount/TotalCount.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, StoreInterface} from "../../interfaces/storeInterface.ts";
import {Pagination} from "../../components/Pagination/Pagination.tsx";
import {PaginationType} from "../../components/Pagination/Pagination.interface.ts";
import {WinnerInterface, WinnersInterface} from "../../interfaces/winnerInterface.ts";
import {WinnerTable} from "../../components/WinnersTable/WinnerTable.tsx";
import {useEffect} from "react";
import {setAllWinners} from "../../store/slices/winnersSlice.ts";

export const Winners = ()=>{
    const totalCount = useSelector<StoreInterface,number>(state =>state.winners.totalWinners)
    const winners = useSelector<StoreInterface, WinnerInterface[]>(state => state.winners.winners)
    const {page,sort,order}  = useSelector<StoreInterface,WinnersInterface>(state => state.winners)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(setAllWinners())
    }, [page,sort,order]);
    return(
        <div>
            <TotalCount totalNumber={totalCount} name={'Winners'}/>
            <Pagination page={page} type={PaginationType.winners}/>
            <WinnerTable winners={winners}/>
        </div>
    )
}