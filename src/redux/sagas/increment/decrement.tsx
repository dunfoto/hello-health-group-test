import { put, takeEvery } from 'redux-saga/effects'
import { DECREMENT, DECREMENT_SAGA } from 'src/redux/reducers/increment'

function* decrementSaga() {
    yield put({
        type: DECREMENT,
    })
}

function* decrement() {
    yield takeEvery(DECREMENT_SAGA, decrementSaga)
}

export default decrement
