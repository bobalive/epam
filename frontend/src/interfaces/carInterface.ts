export interface CarParams {
    color:string
    name:string
}

export interface SelectedCarInterface extends CarParams{
    id: number,
}
export interface CarInterface extends SelectedCarInterface{
    position?:number
}
