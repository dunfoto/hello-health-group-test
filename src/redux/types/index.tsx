import { ReducerEmployeeTypes } from './employee'
import { ReducerIncrementTypes } from './increment'

export * from './employee'
export * from './increment'
export interface IAction {
    type: string
    [key: string]: any
}

export interface Reducer {
    employee: ReducerEmployeeTypes
    increment: ReducerIncrementTypes
}
