import {MutableRefObject, RefObject} from "react";
import {useRoadWidth} from "./useRoadWidth.tsx";
import {driveCar, toggleEngine} from "../api/cars.api.ts";
export interface useAnimationInterface {
    id:number
    interval: MutableRefObject<number|undefined>;
    carRef: RefObject<SVGSVGElement>;
    setWinner?:(time:number)=>void
}
export const useAnimation = async ({ interval, id, carRef,setWinner }: useAnimationInterface) => {
    const speed = await toggleEngine({id,status:"started"})
    let pos = 0;

    driveCar({id}).then((res) => {
        if(!res) {
            clearInterval(interval.current)
        }
    })
    const roadWidth = useRoadWidth()
    if (roadWidth && speed) {
        interval.current = setInterval(() => {
            if (carRef.current && roadWidth - 70 > pos) {
                carRef.current.style.transform = `translateX(${pos}px)`;
                pos += roadWidth/1000;
            } else {
                if(setWinner){
                    setWinner(+(500/speed).toFixed(2))
                }
                clearInterval(interval.current);
            }
        }, 500/speed );

    }
};
