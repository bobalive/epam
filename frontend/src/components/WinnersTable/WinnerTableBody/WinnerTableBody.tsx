import {WinnerInterface} from "../../../interfaces/winnerInterface.ts";
import {useCarInfo} from "../../../hooks/useCarInfo.tsx";
import {CarIcon} from "../../../assets/CarIcon.tsx";

export const WinnerTableBody =({id,time,wins}:WinnerInterface)=>{
    const {color , name} = useCarInfo(id)
    return (
        <tr>
            <td>{id}</td>
            <td>
                <CarIcon
                    color={color}
                    width={70}
                    height={70}/>
            </td>
            <td>{name}</td>
            <td>{time}</td>
            <td>{wins}</td>
        </tr>
    )
}