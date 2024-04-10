import {useEffect, useState} from "react";
import {getCarInfo} from "../api/cars.api.ts";

interface carInfoInterface{
    name:string,
    color:string
}
export const useCarInfo = (id:number):carInfoInterface=>{
    const [carInfo , setcarInfo] = useState<carInfoInterface>({name:'',color:''})
    useEffect(() => {
        getCarInfo(id).then(res=>{
            if(res){
                setcarInfo({color:res.color ,name:res.name})
            }
        })
    }, []);
    return carInfo
}