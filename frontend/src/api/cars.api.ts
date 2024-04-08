import axios from "./axios.ts";
import {AxiosResponse} from "axios";
import {CarInterface, CarParams} from "../interfaces/carInterface.ts";

export const getCars = async (page:number)=>{
    const queryParams ={
        _page:page,
        _limit:7
    }
    const res:AxiosResponse<CarInterface[]> = await axios.get('/garage' ,{params:queryParams})
    if(res.status === 200){
        return res.data
    }
}
export const getTotalCarsNumber = async ()=>{
    const queryParams ={
        _page:1,
        _limit:9999
    }
    const res:AxiosResponse<CarInterface[]> = await  axios.get('/garage' , {params:queryParams})

    if(res.status === 200){
        return res.data.length
    }
}
export const createCar = async ({name, color}:CarParams)=>{
    const res:AxiosResponse<CarInterface> = await axios.post('/garage' ,{color,name})
    if(res.status=== 201){
        return res.data
    }
}
export const handleDeleteCar = async (id:number)=>{
    const res = await axios.delete('/garage/'+id)
    if(res.status === 200){
        return true
    }
}
export const handleUpdateCar = async ({id,name,color}:CarInterface)=>{
    const res = await axios.put<CarInterface>('/garage/'+id ,{name,color})
    if(res.status === 200){
        return res.data
    }
}
