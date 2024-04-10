import {TotalCountPropsInterface} from "./TotalCountPropsInterface.ts";
import s from './TotalCount.module.scss'

export const TotalCount = ({totalNumber , name}:TotalCountPropsInterface) => {
  return(
      <div className={s.carsCount}>
          {name} {totalNumber}
      </div>
  )
}