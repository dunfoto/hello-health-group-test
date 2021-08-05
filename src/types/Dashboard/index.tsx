import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router-dom'
import { EmployeeTypes } from 'src/redux/types'
import { Pagination } from 'src/types'

export interface DashboardTypes extends Dispatch, RouteComponentProps {
    employees: EmployeeTypes[]
    dispatch: Dispatch
    pagination: Pagination
}
