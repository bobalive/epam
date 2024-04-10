export interface EnginePatchInterface{
    id:number
    status:'started'|'stopped'|'drive'
}
export interface EngineInterface{
    velocity:number,
    distance:number
}