export interface InputInterface{
    type:'active'|'disabled'
    value:string,
    setValue:(arg:string)=>void,
    placeholder?:string

}