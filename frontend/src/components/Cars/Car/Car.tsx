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
import {setPosition} from "../../../store/slices/carSlise.ts";
export const Car = ({id,color,name,isSelected,position }:CarPropsInterface) => {
    const [isStarted , setIsstarted]= useState(false)
    const [carState , setCarState]= useState<'stop'|'drive'>('stop')

    const dispatch = useDispatch()
    const isRace = useSelector<StoreInterface , boolean>(store=> store.app.isRace)

    const carRef=useRef<SVGSVGElement>(null)
    let interval = useRef<number>();

    const setNewPostion= (position:number)=>{
        dispatch(setPosition({id,position}))
    }
    const setWinner = (time:number)=>{
        dispatch(setCurrnetWinner({time,name,id}))
    }
    useEffect(() => {
        if(isRace && position == 0){
            setIsstarted(true)
            handleAnimation(setWinner)
        }else if(!isRace){
            handleStop()
        }
    }, [isRace]);
    useEffect(() => {
        if(carRef.current){
            carRef.current.style.transform = `translateX(${position}px)`
        }
    }, [position , carRef.current]);

    const handleAnimation =  async (setWinner?:(time:number)=>void)=>{
         await useAnimation({carRef,id,interval ,setWinner ,setNewPostion})
        setIsstarted(true)
    }
    const handleStop = ()=>{
        if(carRef.current){
            setIsstarted(false)
            clearInterval(interval.current)
            carRef.current.style.transform = `translateX(${0}px)`
            setNewPostion(0)
        }
    }
  return(
      <div className={`${s.carContainer} ${isSelected&&s.active}`} key={id}>
              <CarTools name={name} id={id} color={color} isSelected={isSelected} isRace={isRace} isStarted= {isStarted}/>
          <div className={s.roadContainer}>
            <div className={s.roadTools}>
                <Pause className={cn({[s.active]:!isStarted},[s.roadTool])}
                onClick={()=> {
                    if(isStarted){
                    setCarState('stop')
                    handleStop()
                    toggleEngine({id,status:'stopped'})
                    }
                }}/>
                <Play className={cn({[s.active]: isStarted}, [s.roadTool])}
                onClick={()=> {
                   setCarState('drive')
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