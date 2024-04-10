import {WinnerTablePropsInterface} from "./WinnerTablePropsInterface.ts";
import {WinnerTableHead} from "./WinnerTableHead/WinnerTableHead.tsx";
import {WinnerTableBody} from "./WinnerTableBody/WinnerTableBody.tsx";


export const WinnerTable  = ({winners}:WinnerTablePropsInterface)=>{
    return(
        <div>
            <table>
                <WinnerTableHead/>
                <tbody>
                {winners.map(winner => (
                    <WinnerTableBody {...winner}/>
                ))}
                </tbody>
            </table>
        </div>
    )
}