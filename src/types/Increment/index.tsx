import { Dispatch } from 'redux'
import { RouteComponentProps } from 'react-router-dom'
import { Pagination } from 'src/types'

export interface IncrementTypes extends Dispatch, RouteComponentProps {
    dispatch: Dispatch
    pagination: Pagination
    data: number
}
