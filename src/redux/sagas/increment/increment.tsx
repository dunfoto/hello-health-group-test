import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_SAGA } from 'src/redux/reducers/increment'

function* incrementSaga() {
    yield put({
        type: INCREMENT,
    })
}
function* increment() {
    yield takeEvery(INCREMENT_SAGA, incrementSaga)
}

export default increment
