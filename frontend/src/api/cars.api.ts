import axios from "./axios.ts";
import { AxiosResponse} from "axios";
import {CarInterface, CarParams, SelectedCarInterface} from "../interfaces/carInterface.ts";
import {EngineInterface, EnginePatchInterface} from "../interfaces/engineInterface.ts";
import {limitgarage} from "../config/paginationLimit.ts";

export const getCars = async (page:number)=>{
    const queryParams ={
        _page:page,
        _limit:limitgarage
    }
    const res:AxiosResponse<CarInterface[]> = await axios.get('/garage' ,{params:queryParams})
    if(res.status === 200){
        return res.data
    }
}
export const getCarInfo = async (id:number)=>{
    const res:AxiosResponse<CarInterface> = await axios.get('/garage/'+id)
    if(res.status === 200 ){
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
export const handleUpdateCar = async ({id,name,color}:SelectedCarInterface)=>{
    const res = await axios.put<SelectedCarInterface>('/garage/'+id ,{name,color})
    if(res.status === 200){
        return res.data
    }
}
export const toggleEngine = async ({id,status}:EnginePatchInterface)=>{
    const res = await axios.patch<EngineInterface>(`/engine?id=${id}&status=${status}` )
    if(res.status === 200){
        return res.data.velocity
    }
}
export const driveCar = async ({id}:{id:number})=>{
    try {
        const res = await axios.patch<{ success: boolean }>(`/engine?id=${id}&status=drive`);
        if (res.status === 200) {
            return res.data.success;
        }
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            console.error('Internal Server Error:', error.response.data);
            return 0;
        }
    }

}
