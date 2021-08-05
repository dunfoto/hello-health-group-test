import { Pagination } from 'src/types'

export interface ReducerEmployeeTypes {
    data: EmployeeTypes[]
    pagination: Pagination
}

export interface EmployeeTypes {
    id: string
    name: string
    email: string
    avatar: string
    position: string
    createdAt: string
}
