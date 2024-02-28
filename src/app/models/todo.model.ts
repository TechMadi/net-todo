export interface ITodo{
    name:string,
    status:ISTATUS
    
}

export enum ISTATUS{
    COMPLETED='COMPLETED',
    INCOMPLETE='IN COMPLETED'
}