import {ReactNode} from "react";

export interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    state:'default'|'active'|'disabled'|''
    children:ReactNode
}