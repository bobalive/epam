import {WinnerInterface, WinnerQueryInterface} from "../interfaces/winnerInterface.ts";
import axios from "./axios.ts";
import {AxiosResponse} from "axios";
interface newWinnerInterface{
    id:number
    time:number
}

export const getWinners  = async (params:WinnerQueryInterface)=>{
   const res:AxiosResponse<WinnerInterface[]> = await axios.get('/winners', {params})
    if(res.status === 200){
        return res.data
    }
}
export const getWinner = async (id:number)=>{
    const res:AxiosResponse<WinnerInterface> = await axios.get('/winners/'+id)
    if(res.status === 200){
        return res.data
    }
}
export const createNewWinner = async ({id , time}:newWinnerInterface)=>{
    try {
        const res = await getWinner(id)
        if(res){
            try{
                const updatedWinner = await axios.put('/winners/'+id , {wins:res.wins+1 , time:Math.min(res.time , time)})
                if(updatedWinner.status === 200){
                    return 'updated'
                }
            }catch (e){
                console.log(e)
            }

        }
    }catch (e){
        try{
            const newWinner = await axios.post('/winners', {wins:1, time:time , id:id})
            if(newWinner.status === 200){
                return 'created'
            }
        }catch (e){
            console.log(e)
        }
    }
}

export const deleteWinner = async (id:number)=>{
    try{
        const res = await axios.delete('/winners/'+id)
        if(res.status === 200){
            return 'deleted'
        }
    }catch (e){
        console.log(e)
    }
}
