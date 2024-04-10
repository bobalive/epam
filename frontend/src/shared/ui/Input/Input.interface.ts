export interface InputInterface{
    type:'active'|'disabled'|'default'
    value:string,
    setValue:(arg:string)=>void,
    placeholder?:string

}