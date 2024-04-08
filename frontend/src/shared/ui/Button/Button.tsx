import {ButtonPropsInterface} from "./Button.interface.ts";
import s from './Button.module.scss'


export const Button = ({state,children, ...props}:ButtonPropsInterface) => {
  return(
      <button
      className={`${s.btn} ${state ? s[state] : ''}`}
      disabled={state==="disabled"}
          {...props}
      >{children}</button>
  )
}