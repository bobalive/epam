import {useDispatch} from "react-redux";
import {useState} from "react";
import {Order, Sort} from "../../../interfaces/winnerInterface.ts";
import s from './WinnerTableHead.module.scss'
import {sortTable} from "../../../store/slices/winnersSlice.ts";

interface SortInterface{
    id:Order,
    wins:Order,
    time:Order
}
export const WinnerTableHead = ()=>{
    const dispatch = useDispatch()
    const [sort , setSort] = useState<SortInterface>({
        id:Order.acs,
        time:Order.acs,
        wins:Order.acs
    })
    const handleSort = (sortItem:Sort)=>{
        dispatch(sortTable({ _sort: sortItem, _order: sort[sortItem] }));
        setSort(prev=>{
            prev[sortItem] = prev[sortItem] ==Order.acs?Order.desc:Order.acs
            return {...prev}
        })}
    return (
        <thead>
        <tr>
            <td>
                <div className={s.sort} onClick={()=>handleSort(Sort.id)}>id</div>
            </td>
            <td>color</td>
            <td>name</td>
            <td>
                <div className={s.sort} onClick={()=>handleSort(Sort.time)}>time</div>
            </td>
            <td>
                <div className={s.sort} onClick={()=>handleSort(Sort.wins)}>wins</div>
            </td>
        </tr>
        </thead>
    )
}