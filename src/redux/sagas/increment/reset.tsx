import { put, takeEvery } from 'redux-saga/effects'
import { RESET, RESET_SAGA } from 'src/redux/reducers/increment'

function* resetSaga() {
    yield put({
        type: RESET,
    })
}

function* reset() {
    yield takeEvery(RESET_SAGA, resetSaga)
}

export default reset
