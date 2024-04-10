import {useSelector} from "react-redux";
import {StoreInterface} from "../../interfaces/storeInterface.ts";
import {CurrentWinnerInterface} from "../../interfaces/winnerInterface.ts";
import s from './WinnerModal.module.scss'

export const WinnerModal = ()=> {
    const {name, time,id} = useSelector<StoreInterface, CurrentWinnerInterface>(state => state.winners.currentWinner)
    return (
        <>
            {id>=0
                ?<div className={s.winnerModal} >
                    <h3>Winner is: {name} </h3>
                    <span>time {time}</span>
                </div>
                :<></>
            }
        </>
    )
}