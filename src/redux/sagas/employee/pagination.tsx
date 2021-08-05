import { takeLatest, put } from 'redux-saga/effects'
import { UPDATE_PAGINATION_SAGA, UPDATE_PAGINATION } from 'src/redux/reducers/employee'
import { IAction } from 'src/redux/types'

function* updatePaginationSaga(action: IAction) {
    try {
        yield put({
            ...action,
            type: UPDATE_PAGINATION_SAGA,
        })
    } catch (err) {
        console.log(err)
    }
}
function* updatePagination() {
    yield takeLatest(UPDATE_PAGINATION, updatePaginationSaga)
}

export default updatePagination
