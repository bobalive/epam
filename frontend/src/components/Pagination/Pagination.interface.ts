export interface PaginationInterface{
    page:number,
    type:PaginationType
}
export enum PaginationType {
    garage='garage',
    winners='winner'
}