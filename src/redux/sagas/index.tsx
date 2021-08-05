import { all } from 'redux-saga/effects'

import getEmployee from './employee/get'
import updatePagination from './employee/pagination'

import increment from './increment/increment'
import reset from './increment/reset'
import decrement from './increment/decrement'

function* sagas() {
    yield all([getEmployee(), updatePagination(), increment(), reset(), decrement()])
}

export default sagas
