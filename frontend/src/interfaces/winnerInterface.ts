export enum Sort{
    wins='wins',
    id= 'id',
    time= 'time'

}
export enum Order{
    acs="ASC",
    desc="DESC"

}
export interface WinnerQueryInterface extends SortInterface{
    _page:number,
    _limit:number,

}
export interface SortInterface{
    _sort:Sort,
    _order:Order,
}
export interface CurrentWinnerInterface {
    name:string,
    id:number,
    time:number
}
export interface WinnerInterface{
    id:number,
    time:number
    wins:number
}
export interface WinnersInterface{
    currentWinner:CurrentWinnerInterface,
    winners:WinnerInterface[],
    totalWinners:number,
    page:number,
    sort:Sort,
    order:Order
}
