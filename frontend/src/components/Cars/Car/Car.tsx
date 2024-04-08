import s from './Car.module.scss'
import {CarTools} from "../CarTools/CarTools.tsx";
import {  Pause, Play} from "lucide-react";
import cn from 'classnames'
import {useRef, useState} from "react";
import {CarIcon} from "../../../assets/CarIcon.tsx";
import finish from '../../../assets/images/img.png'
import {CarPropsInterface} from "./CarsPropsInterface.ts";
import {useRoadWidth} from "../../../hooks/useRoadWidth.tsx";
import {useAnimation} from "../../../hooks/useAnimation.tsx";

export const Car = ({id,color,name,isSelected}:CarPropsInterface) => {
    const [isStarted , setIsstarted]= useState(false)
    const carRef=useRef<SVGSVGElement>(null)
    let interval = useRef<number>();
    const handleAnimation = ()=>{
        const roadWidth = useRoadWidth()
        setIsstarted(true)
        useAnimation({carRef,speed:64,interval,roadWidth})
    }
    const handleStop = ()=>{
        if(carRef.current){
            carRef.current.style.transform = `translateX(${0}px)`;
            setIsstarted(false)
            clearInterval(interval.current)
        }
    }
  return(
      <div className={`${s.carContainer} ${isSelected&&s.active}`} key={id}>
              <CarTools name={name} id={id} color={color} isSelected={isSelected} />

          <div className={s.roadContainer}>
            <div className={s.roadTools}>
                <Pause className={cn({[s.active]:!isStarted},[s.roadTool])}
                onClick={()=> {
                    handleStop()
                }}
                />
                <Play className={cn({[s.active]: isStarted}, [s.roadTool])}
                onClick={()=> {
                    if(!isStarted){
                        handleAnimation()
                    }
                }}/>
            </div>
              <div className={s.road +' road'}>
                  <CarIcon color={color} width={70} height={70} className={s.car} ref={carRef}/>
                  <img src={finish} width={50} height={50} style={{marginRight:70}}/>
              </div>
          </div>
      </div>
  )
}