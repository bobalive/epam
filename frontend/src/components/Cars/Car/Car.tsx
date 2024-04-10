import s from './Car.module.scss'
import {CarTools} from "../CarTools/CarTools.tsx";
import {Pause, Play} from "lucide-react";
import cn from 'classnames'
import { useEffect, useRef, useState} from "react";
import {CarIcon} from "../../../assets/CarIcon.tsx";
import finish from '../../../assets/images/img.png'
import {CarPropsInterface} from "./CarsPropsInterface.ts";
import {useAnimation} from "../../../hooks/useAnimation.tsx";
import {toggleEngine} from "../../../api/cars.api.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../../../interfaces/storeInterface.ts";
import {setCurrnetWinner} from "../../../store/slices/winnersSlice.ts";

export const Car = ({id,color,name,isSelected }:CarPropsInterface) => {
    const [isStarted , setIsstarted]= useState(false)
    const [carState , setCatState]= useState<'stop'|'drive'>('stop')

    const dispatch = useDispatch()
    const isRace = useSelector<StoreInterface , boolean>(store=> store.app.isRace)

    const carRef=useRef<SVGSVGElement>(null)
    let interval = useRef<number>();
    const setWinner = (time:number)=>{
        dispatch(setCurrnetWinner({time,name,color,id}))
    }
    useEffect(() => {
        handleStop()
        if(isRace){
            setIsstarted(true)
            handleAnimation(setWinner)
        }
    }, [isRace]);
    const handleAnimation =  async (setWinner?:(time:number)=>void)=>{
         await useAnimation({carRef,id,interval ,setWinner})
        setIsstarted(true)
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
                    if(isStarted){
                    setCatState('stop')
                    handleStop()
                    toggleEngine({id,status:'stopped'})
                    }
                }}/>
                <Play className={cn({[s.active]: isStarted}, [s.roadTool])}
                onClick={()=> {
                   setCatState('drive')
                    if(carState === 'stop'){
                        handleAnimation()
                    }
                }}/>
            </div>
              <div className={s.road +' road'}>
                  <CarIcon
                      color={color}
                      width={70}
                      height={70}
                      className={s.car}
                      ref={carRef}
                  />
                  <img src={finish} width={50} height={50} style={{marginRight:70}}/>
              </div>
          </div>
      </div>
  )
}