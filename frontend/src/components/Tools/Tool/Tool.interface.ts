import {ReactNode} from "react";

export interface ToolInterface{
    id?:number
    name:string,
    color:string,
    submit:(color:string , name:string,id:number)=>void
    type:'active'|'disabled'|'default'
    children:ReactNode
}