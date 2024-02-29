export interface ITodo{
    name:string,
    status:ISTATUS
    important:boolean
    
}

export enum ISTATUS{
    COMPLETED='COMPLETED',
    INCOMPLETE='IN COMPLETED'
}